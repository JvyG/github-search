'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Button from '@/app/_components/atoms/Button';

export default function Header() {
  const router = useRouter()

  const redirectHandler = (path: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    router.push(path)
  }

  return (
    <header className="fixed top-0 left-0 fixed min-w-full z-50 h-[56px] bg-white flex items-center justify-center shadow-sm">
      <div className="w-full xl:w-[1200px] 2xl:w-[1440px] gap-[8px] sm:gap-0 px-4 lg:px-16 mx-auto flex flex-row items-center">
        <h1 className="text-center">Github Search Proyect</h1>
        <nav className='place-self-center	ml-auto mr-auto'>
          <ul className="flex flex-row gap-[1px]">
            <li>
              <Button theme='tertiary' onClick={redirectHandler('/users')}>Users</Button>
            </li>
            <li>
              <Button theme='tertiary' onClick={redirectHandler('/repositories')}>Repositories</Button>
            </li>
          </ul>
        </nav>
        <a href='https://github.com/JvyG/github-search' target="_blank">
          <Image
            src={"/logos/github-mark.png"}
            width={24}
            height={24}
            alt='Github project repository'
          />
        </a>
      </div>
    </header>
  );
}
