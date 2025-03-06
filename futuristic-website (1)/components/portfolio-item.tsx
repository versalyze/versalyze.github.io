"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface PortfolioItemProps {
  item: {
    id: number
    title: string
    category: string
    image: string
    description: string
    technologies: string[]
    link: string
  }
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="cyber-box rounded-lg overflow-hidden bg-gray-900/50 h-full flex flex-col"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div>
            <h3 className="text-xl font-bold">{item.title}</h3>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-4 flex-grow">
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>

        <div>
          <Button asChild className="w-full">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

