import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Import Link
import Header from "@/components/layout/Header";
import "./font.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "My professional portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {/* <nav style={{ padding: '1rem', background: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
          <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
          <Link href="/about" style={{ marginRight: '1rem' }}>About</Link>
          <Link href="/blog" style={{ marginRight: '1rem' }}>Blog</Link>
          <Link href="/free-audit" style={{ marginRight: '1rem' }}>Free Audit</Link>
          <Link href="/work" style={{ marginRight: '1rem' }}>Work</Link>
          <Link href="/work-with-me" style={{ marginRight: '1rem' }}>Workwithme</Link>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
