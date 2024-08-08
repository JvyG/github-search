"use client";
import { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

import { useDebounce } from "@/hooks/useDebounce";
import TextField from "@/components/molecules/TextField";
import Card from "@/components/atoms/Card";
import Pagination from "@/components/organisms/Pagination";
import UserItem from "@/components/organisms/UserItem";

export default function Users() {
  const router = useRouter()
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [user, setUser] = useState(searchParams.get('name') || '');
  const [page, setPage] = useState(searchParams.get('page') || 1);

  const onChangeRepository = (value: string) => {
    setUser(value);
    setPage(1);
  };

  const userDebounced = useDebounce(user, 400);
  const { data, isLoading } = useSWR(
    userDebounced ? `search/users?q=${userDebounced}&page=${page}&per_page=24` : null
  );

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if(!userDebounced){
      current.delete('name')
    } else {
      current.set('name', userDebounced)
    }

    if(!page){
      current.delete('page')
    } else {
      current.set('page', `${page}`)
    }
    
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.replace(`${pathname}${query}`);
  }, [userDebounced, page, searchParams, router, pathname])

  return (
    <section className="flex flex-col gap-8 w-full">
      <TextField
        id="user-name"
        label="User name"
        name="User name"
        placeholder="Name"
        type="text"
        value={user}
        onChange={onChangeRepository}
        icon={<SearchOutlined style={{ fontSize: 18 }} />}
      />
      {!!userDebounced && !!user && !data?.items?.length && !isLoading ? (
        <h3>No results found</h3>
      ) : (
        ""
      )}
      {isLoading && (
        <div className="flex flex-row gap-8">
          <p>Searching for user</p>
          <LoadingOutlined />
        </div>
      )}
      {data?.items?.length ? (
        <Fragment>
          <Card type="rest" className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-2">
            {data.items.map((item: any) => (
              <UserItem
                name={item.login}
                url={item.repos_url}
                avatar={item.avatar_url}
                key={item.id}
              />
            ))}
          </Card>
          <Pagination
            currentPage={page}
            onPageChange={setPage}
            totalPages={Math.ceil(Math.min(data?.total_count, 1000) / 24) || 0}
          />
        </Fragment>
      ) : (
        ""
      )}
      <Toaster
        position="bottom-left"
        toastOptions={{
          duration: 2000,
        }}
      />
    </section>
  );
}
