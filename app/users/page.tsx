import Header from "@/components/organisms/Header";
import Users from "@/components/organisms/Users";
import SWRProvider from "@/providers/swr";

export default function Page() {
  return (
    <main className="flex w-full xl:w-[1200px] 2xl:w-[1440px] px-2 pt-[80px] lg:px-16 pb-4 m-auto min-h-screen w-full flex-col items-center justify-between">
      <Header />
      <SWRProvider>
        <Users />
      </SWRProvider>
    </main>
  );
}
