// import { useRouter } from "next/navigation";
import Image from "next/image";
// import Button from "@/app/_components/atoms/Button";
// import { MouseEvent } from "react";

export default function Header() {
  // const router = useRouter();

  // const redirectHandler =
  //   (path: string) => (e: MouseEvent<HTMLButtonElement>) => {
  //     e.stopPropagation();
  //     router.push(path);
  //   };

  return (
    <header className="fixed top-0 left-0 fixed min-w-full z-50 h-[56px] bg-white flex items-center justify-center shadow-sm">
      <div className="w-full xl:w-[1200px] 2xl:w-[1440px] gap-[8px] sm:gap-0 px-4 lg:px-16 mx-auto flex flex-row items-center justify-between">
        <a href="/" target="_self" style={{ padding: 12 }}>
          Home
        </a>
        <nav className="place-self-center ml-auto mr-auto">
          <ul className="flex flex-row gap-[1px]">
            <li>
              <a href="/users" target="_self" style={{ padding: 12 }}>
                Users
              </a>
            </li>
            <li>
              <a href="/repositories" target="_self">
                Repositories
              </a>
            </li>
          </ul>
        </nav>
        <a href="https://github.com/JvyG/github-search" target="_blank" style={{ padding: 12 }}>
          <Image
            src={"/logos/github-mark.png"}
            width={24}
            height={24}
            alt="Github project repository"
          />
        </a>
      </div>
    </header>
  );
}
