import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VersaLyze",
  description: "Innovative solutions for modern challenges",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground min-h-screen flex flex-col`}>
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,0))]"></div>
        <Navbar />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'