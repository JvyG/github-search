"use client";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import Button from "@/components/atoms/Button";

export default function HomeDescription() {
  const router = useRouter();
  const handleRedirect = (e: MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    router.push(e.target.dataset.url);
  };

  return (
    <div className="flex-1 my-auto">
      <h1 className="text-2xl text-gray-700 font-semibold">
        A simple GitHub search project made for a practical exam
      </h1>
      <h2 className="text-lg text-gray-700 font-normal pt-[6px] text-justify">
        A modern web application built with Next.js for server-side rendering
        and static site generation, ensuring optimal performance and SEO. It
        utilizes Tailwind CSS for a utility-first approach to styling, which
        promotes a consistent and scalable design system. The application is
        structured using Atomic Design principles, enabling modular and reusable
        component design. SWR is employed for efficient data fetching and
        caching, enhancing the application&apos;s responsiveness and user experience.
      </h2>
      <div
        className="flex flex-row mt-[24px] gap-[24px]"
        onClick={handleRedirect}
      >
        <Button theme="primary" data-url="/users">
          Search Users
        </Button>
        <Button theme="primary" data-url="/repositories">
          Search Repositories
        </Button>
      </div>
    </div>
  );
}
