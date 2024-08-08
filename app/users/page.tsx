import { Metadata } from "next";
import { Suspense } from "react";

import Users from "@/components/organisms/Users";
import SWRProvider from "@/providers/swr";

export const metadata: Metadata = {
  title: "GitHub search users",
  description: "Search GitHub users by name",
};

export default function Page() {
  return (
    <main className="flex xl:w-[1200px] 2xl:w-[1440px] min-h-screen flex-col items-center mx-auto justify-between px-4 lg:px-16 pt-[80px] pb-[24px] bg-slate-100">
      <SWRProvider>
        <Suspense fallback={null}>
          <Users />
        </Suspense>
      </SWRProvider>
    </main>
  );
}
