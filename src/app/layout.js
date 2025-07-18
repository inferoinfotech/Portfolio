import { Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import LenisWrapper from "@/components/layout/LenisWrapper"
import "./font.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata = {
  title: "My Portfolio",
  description: "My professional portfolio website.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <LenisWrapper>
          <Header />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  )
}
