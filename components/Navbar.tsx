"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-1.5 rounded-lg bg-gradient-to-br from-primary-500/20 to-blue-500/20 group-hover:from-primary-500/30 group-hover:to-blue-500/30 transition-all duration-300"
            >
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary-400" />
            </motion.div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <span className="hidden sm:inline">HomeGuard AI</span>
              <span className="sm:hidden">HGA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-50 hover:text-primary-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-neutral-50 hover:text-primary-400 transition-colors"
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className="text-neutral-50 hover:text-primary-400 transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/contact"
              className="text-neutral-50 hover:text-primary-400 transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-primary-500 text-white hover:bg-primary-400 text-sm sm:text-base px-4 sm:px-6">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="min-w-[44px] min-h-[44px]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-neutral-900 border-neutral-800">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-neutral-50 hover:text-primary-400 transition-colors text-lg"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setOpen(false)}
                  className="text-neutral-50 hover:text-primary-400 transition-colors text-lg"
                >
                  Products
                </Link>
                <Link
                  href="/solutions"
                  onClick={() => setOpen(false)}
                  className="text-neutral-50 hover:text-primary-400 transition-colors text-lg"
                >
                  Solutions
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-neutral-50 hover:text-primary-400 transition-colors text-lg"
                >
                  Contact
                </Link>
                <Button className="bg-primary-500 text-white hover:bg-primary-400 mt-4">
                  Request Demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

