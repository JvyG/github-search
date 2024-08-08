import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/organisms/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub search",
  description: "A GitHub search project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
