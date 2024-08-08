"use client";
import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useDebounce } from "@/hooks/useDebounce";
import TextField from "@/components/molecules/TextField";
import Card from "@/components/atoms/Card";
import RepoItem from "@/components/organisms/RepoItem";
import Pagination from "@/components/organisms/Pagination";

export default function Repositories() {
  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [repository, setRepository] = useState(searchParams.get('name') || '');
  const [page, setPage] = useState(searchParams.get('page') || 1);
  
  const onChangeRepository = (value: string) => {
    setRepository(value)
    setPage(1)
  }

  const repositoryDebounced = useDebounce(repository, 400)
  const { data, error, isLoading } = useSWR(
    repository
      ? `search/repositories?q=${repositoryDebounced}&page=${page}&per_page=12`
      : null
  );

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if(!repositoryDebounced){
      current.delete('name')
    } else {
      current.set('name', repositoryDebounced)
    }

    if(!page){
      current.delete('page')
    } else {
      current.set('page', `${page}`)
    }
    
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.replace(`${pathname}${query}`);
  }, [repositoryDebounced, page])

  return (
    <section className="flex flex-col gap-8 w-full">
      <TextField
        id="respository-name"
        label="Repository name"
        name="Repository name"
        placeholder="Name"
        type="text"
        value={repository}
        onChange={onChangeRepository}
        icon={<SearchOutlined style={{ fontSize: 18 }} />}
      />
      {(!!repositoryDebounced && !!repository) && !data?.items?.length && !isLoading ? (
        <h3>No results found</h3>
      ): ''}
      {isLoading && (
        <div className="flex flex-row gap-8">
          <p>Searching for repositories</p>
          <LoadingOutlined />
        </div>
      )}
      {data?.items?.length ? (
        <Fragment>
          <Card type="rest" className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-2">
            {data.items.map((item: any) => (
              <RepoItem
                name={item.full_name}
                description={item.description}
                language={item.language}
                lastUpdate={item.pushed_at}
                stars={item.stargazers_count}
                url={item.html_url}
                avatar={item.owner.avatar_url}
                topics={item.topics.slice(0, 4)}
                key={item.id}
              />
            ))}
          </Card>
          <Pagination 
            currentPage={page}
            onPageChange={setPage}
            totalPages={Math.ceil(Math.min(data?.total_count, 1000) / 12) || 0}
          />
        </Fragment>
      ) : ''}
    </section>
  );
}
