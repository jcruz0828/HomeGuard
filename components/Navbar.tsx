"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-curser-bg/80 backdrop-blur-sm border-b border-curser-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-curser-primary">
            CURSER
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-curser-text hover:text-curser-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-curser-text hover:text-curser-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className="text-curser-text hover:text-curser-primary transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/contact"
              className="text-curser-text hover:text-curser-primary transition-colors"
            >
              Contact
            </Link>
            <Button className="bg-curser-primary text-curser-bg hover:bg-curser-primaryLight">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-curser-text hover:text-curser-primary transition-colors text-lg"
                >
                  Home
                </Link>
                <Link
                  href="/products"
                  onClick={() => setOpen(false)}
                  className="text-curser-text hover:text-curser-primary transition-colors text-lg"
                >
                  Products
                </Link>
                <Link
                  href="/solutions"
                  onClick={() => setOpen(false)}
                  className="text-curser-text hover:text-curser-primary transition-colors text-lg"
                >
                  Solutions
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="text-curser-text hover:text-curser-primary transition-colors text-lg"
                >
                  Contact
                </Link>
                <Button className="bg-curser-primary text-curser-bg hover:bg-curser-primaryLight mt-4">
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

