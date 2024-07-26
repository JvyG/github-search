import Image from "next/image";
import Header from "@/components/organisms/Header";
import HomeDescription from "@/components/organisms/HomeDescription";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 pt-[80px] bg-slate-200">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1 w-full xl:w-[1200px] 2xl:w-[1440px] lg:px-16 mx-auto gap-[24px] lg:gap[56px]">
        <HomeDescription />
        <div className="flex-1 flex flex-col gap-[12px] items-center" style={{
           backgroundImage: 'radial-gradient(white 1px, transparent 0)',
           backgroundSize: '20px 20px'
        }}>
          <Image
            src="/images/users-page.png"
            width={400}
            height={400}
            className="rounded-md shadow-md hidden relative lg:block lg:right-[10%]"
            alt="users page"
          />
          <Image
            src="/images/repositories-page.png"
            width={400}
            height={400}
            className="rounded-md shadow-md relative lg:top-[5%] lg:left-[15%]"
            alt="repositories page"
          />
          <Image
            src="/images/user-profile-page.png"
            width={400}
            height={400}
            className="rounded-md shadow-md relative lg:top-[10%]"
            alt="repositories page"
          />
        </div>
      </div>
    </main>
  );
}
