"use client";
import { useState } from "react";
import useSWR from "swr";
import { SearchOutlined } from "@ant-design/icons";

import { useDebounce } from "@/hooks/useDebounce";
import TextField from "@/components/molecules/TextField";
import Card from "@/components/atoms/Card";
import RepoItem from "@/components/organisms/RepoItem";

export default function SearchBar() {
  const [repository, setRepository] = useState("");
  const [page, setPage] = useState(1);

  const repositoryDebounced = useDebounce(repository, 400)
  const { data, error } = useSWR(
    repository
      ? `search/repositories?q=${repositoryDebounced}&page=${page}&per_page=10`
      : null
  );

  return (
    <section className="flex flex-col gap-8 w-full">
      <TextField
        id="respository-name"
        label="Respository name"
        name="Respository name"
        placeholder="Name"
        type="text"
        value={repository}
        onChange={setRepository}
        icon={<SearchOutlined style={{ fontSize: 18 }} />}
      />
      {repositoryDebounced && !data?.items?.length ? (
        <h3>No results found</h3>
      ): ''}
      <Card type="rest" className="flex flex-col gap-2">
        {data?.items?.map((item: any) => (
          <RepoItem
            name={item.full_name}
            description={item.description}
            language={item.language}
            lastUpdate={item.pushed_at}
            stars={item.stargazers_count}
            url={item.html_url}
            avatar={item.owner.avatar_url}
            topics={item.topics}
            key={item.id}
          />
        ))}
      </Card>
    </section>
  );
}
