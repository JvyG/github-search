'use client'
import { ReactNode } from "react";
import { SWRConfig } from "swr";
import fetcher from "@/utils/fetcher";

interface SWRProviderProps {
  children: ReactNode
}

export default function SWRProvider({ children }: SWRProviderProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      {children}
    </SWRConfig>
  )
}