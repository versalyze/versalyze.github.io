"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cpu, Globe, Youtube, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Home() {
  // ... (keep the existing code)

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary glow-text">
            <span className="text-primary">Versa</span>Lyze
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300">
            Innovative solutions for tomorrow's challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group">
              <Link href="/portfolio">
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden grid-background">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 0.3,
                scale: 1,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Expertise</h2>
            <div className="neon-line w-24 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code className="h-10 w-10 text-primary" />,
                title: "Web Development",
                description: "Creating responsive, modern websites with cutting-edge technologies",
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Digital Marketing",
                description: "Implementing strategies to increase online visibility and engagement",
              },
              {
                icon: <Cpu className="h-10 w-10 text-primary" />,
                title: "AI Integration",
                description: "Incorporating artificial intelligence to create smarter solutions",
              },
              {
                icon: <Youtube className="h-10 w-10 text-primary" />,
                title: "YouTube Growth",
                description: "Strategies and techniques to grow and monetize YouTube channels",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="cyber-box p-6 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="cyber-box p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary glow-text">Get in Touch With Us</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Youtube className="text-primary" />
                  <a
                    href="https://youtube.com/@VersaLyzeLLC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary"
                  >
                    @VersaLyzeLLC
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Instagram className="text-primary" />
                  <a
                    href="https://instagram.com/VersaLyze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary"
                  >
                    @VersaLyze
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Twitter className="text-primary" />
                  <a
                    href="https://twitter.com/VersaLyze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary"
                  >
                    @VersaLyze
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="cyber-box p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold mb-6 text-primary glow-text">Contact Us</h2>
              <p className="text-xl text-gray-300 mb-4">For inquiries, please email us at:</p>
              <a
                href="mailto:hello@versalyze.com"
                className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
              >
                hello@versalyze.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

