import { Metadata } from "next";

import Header from "@/components/organisms/Header";
import Repositories from "@/components/organisms/Repositories";
import SWRProvider from "@/providers/swr";

export const metadata: Metadata = {
  title: "GitHub search repositories",
  description: "Search GitHub repositories by name",
};

export default function Page() {
  return (
    <main className="flex xl:w-[1200px] 2xl:w-[1440px] min-h-screen flex-col items-center mx-auto justify-between px-4 lg:px-16 pt-[80px] pb-[24px] bg-slate-100">
      <Header />
      <SWRProvider>
        <Repositories />
      </SWRProvider>
    </main>
  );
}
