import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - VersaLyze",
  description: "Get in touch with VersaLyze for innovative solutions.",
}

export default function ContactPage() {
  return <ContactPageClient />
}

