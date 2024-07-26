import Header from "@/components/organisms/Header";
import Repositories from "@/components/organisms/Repositories";
import SWRProvider from "@/providers/swr";

export default function Page() {
  return (
    <main className="flex xl:w-[1200px] 2xl:w-[1440px] min-h-screen flex-col items-center mx-auto justify-between px-4 lg:px-16 pt-[80px]">
      <Header />
      <SWRProvider>
        <Repositories />
      </SWRProvider>
    </main>
  );
}
