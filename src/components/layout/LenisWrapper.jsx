"use client"
import useLenis from "@/app/hooks/useLenis"
import { ReactNode } from "react"
        
export default function LenisWrapper({ children }) {
    useLenis()
    return <>{children}</>
}
