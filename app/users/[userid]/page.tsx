import { Metadata } from "next";

import Header from "@/components/organisms/Header";
import UserInfo from "@/components/organisms/UserInfo";

// revalidate all fetch request every hour
export const revalidate = 3600

async function getData(userId: string) {
  const res = await fetch(`https://api.github.com/users/${userId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  
  const repRes = await fetch(
    `${data.repos_url}?type=all&per_page=12&sort=pushed&direction=desc`
  );
  const repositories = await repRes.json();

  return {
    userInfo: data,
    repositories,
  };
}

export const metadata: Metadata = {
  title: "GitHub user details",
  description: "GitHub user profile details",
};

export default async function Page({ params }: any) {
  const { userInfo, repositories } = await getData(params.userid);

  return (
    <main className="flex w-full xl:w-[1200px] 2xl:w-[1440px] px-2 pt-[80px] lg:px-16 pb-[24px] m-auto max-h-screen w-full flex-col items-center justify-between overflow-y-auto">
      <Header />
      <UserInfo
        userId={userInfo.login}
        name={userInfo.name || userInfo.login}
        avatar={userInfo.avatar_url}
        userUrl={userInfo.html_url}
        followers={userInfo.followers}
        following={userInfo.following}
        repositories={repositories}
        twitter={userInfo.twitter_username}
        blog={userInfo.blog}
      />
    </main>
  );
}
