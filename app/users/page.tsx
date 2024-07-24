import Header from "@/components/organisms/Header"
export default function Page() {
  return (
    <main className="flex w-full xl:w-[1200px] 2xl:w-[1440px] px-4 lg:px-16 m-auto min-h-screen w-full flex-col items-center justify-between p-16">
      <Header />
      <div>
        <h1>Users Page</h1>
      </div>
    </main>  
  )
}