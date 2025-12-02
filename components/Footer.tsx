"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2">
            <h3 className="text-2xl font-bold text-primary-500 mb-4">HomeGuard AI</h3>
            <p className="text-neutral-400 max-w-md mb-6">
              Next-generation, fully autonomous smart home security ecosystem with enterprise-level intelligence, reliability, and automation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Facebook, href: "#", label: "Facebook" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-primary-500/10 border border-neutral-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5 text-neutral-400 hover:text-primary-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-neutral-50 font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/products#addons"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Add-Ons
                </Link>
              </li>
              <li>
                <Link
                  href="/products#hardware"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Hardware Specs
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-neutral-50 font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#faq"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="mailto:careers@homeguardai.com"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-neutral-50 font-semibold mb-4">Legal & Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@homeguardai.com"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="mailto:security@homeguardai.com"
                  className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-neutral-800 mb-8">
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-neutral-500 mb-1">Email</p>
              <a
                href="mailto:info@homeguardai.com"
                className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                info@homeguardai.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-neutral-500 mb-1">Phone</p>
              <a
                href="tel:+15551234567"
                className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
            <div>
              <p className="text-xs text-neutral-500 mb-1">Location</p>
              <p className="text-sm text-neutral-400">San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} HomeGuard AI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-neutral-400">
              <Link
                href="/terms"
                className="hover:text-primary-400 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="hover:text-primary-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className="hover:text-primary-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
