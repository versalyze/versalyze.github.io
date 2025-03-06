"use client"
import { motion } from "framer-motion"

export default function ContactPageClient() {
  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have a question or want to work together? We'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div className="cyber-box p-8 rounded-lg bg-gray-900/50">
          <h2 className="text-2xl font-bold mb-4 text-primary">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-4">For inquiries, please email us at:</p>
          <a
            href="mailto:hello@versalyze.com"
            className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors"
          >
            hello@versalyze.com
          </a>
        </div>
      </motion.div>
    </div>
  )
}

