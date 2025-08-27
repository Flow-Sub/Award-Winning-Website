import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Magnetar - AI Solutions",
  description:
    "Top-notch Figma design, web development, app development, automation, scraping, Shopify solutions, chatbots, and AI agents.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${playfair.variable} antialiased`}>
      <body className="overflow-x-hidden bg-black text-white">
        <div className="scroll-smooth">{children}</div>
      </body>
    </html>
  )
}
