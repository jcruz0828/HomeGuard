import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HomeGuard AI - AI-Driven Distributed Smart Home Security Ecosystem",
  description: "Next-generation, fully autonomous smart home security ecosystem with enterprise-level intelligence, reliability, and automation. Edge AI, distributed computing, and real-time robotics-grade control in a unified platform.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

