"use client"

import { motion, AnimatePresence } from "framer-motion"
import PortfolioItem from "@/components/portfolio-item"
import { Button } from "@/components/ui/button"

// Sample portfolio data - you can replace with your own
const portfolioItems = [
  {
    id: 1,
    title: "Web Development",
    category: "Web Development",
    image: "https://media.discordapp.net/attachments/1233261463334813747/1347067464865026048/output-onlinepngtools_3.png?ex=67ca79d6&is=67c92856&hm=621bd5e5feec196bbca6773996dc228acbb95b0050d302f9290316bc41f4dc66&=&format=webp&quality=lossless&width=811&height=605",
    description: "A modern dashboard with real-time data visualization and interactive elements (Just like the site your on!).",
    technologies: ["React", "Next.js", "Three.js", "Tailwind CSS"],
    link: "https://versalyze.com",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-primary">Our Portfolio</h1>
          <div className="neon-line w-24 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and creative works. Each project represents my commitment to excellence and
            innovation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PortfolioItem item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Want to see more of my work or discuss a potential project?</p>
          <Button asChild size="lg">
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

