"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {" "}
          {/* Increased height */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-m5eH6yOvVV3soFIV0gM2Ediy6IJYx8.png"
              alt="VersaLyze Logo"
              width={300}
              height={67}
              className="h-16 w-auto" // Significantly increased size
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center justify-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant={pathname === item.path ? "default" : "ghost"}
                className={pathname === item.path ? "bg-blue-500 text-white" : "text-gray-300 hover:text-blue-500"}
              >
                <Link href={item.path}>{item.name}</Link>
              </Button>
            ))}
          </nav>
          <Button
            asChild
            variant="outline"
            size="lg" // Increased button size
            className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />} {/* Increased icon size */}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    asChild
                    variant={pathname === item.path ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      pathname === item.path ? "bg-blue-500 text-white" : "text-gray-300 hover:text-blue-500"
                    }`}
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </Button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

