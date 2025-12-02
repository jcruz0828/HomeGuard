"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection"
import { Shield, Key, Home as HomeIcon, Building2, Users, Camera, Lock, Zap, Brain, Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-500 text-center mb-4 mt-12">
              Solutions for Every Property Type
            </h1>
            <p className="text-neutral-400 text-center mb-12 max-w-3xl mx-auto text-lg">
              HomeGuard AI provides tailored security solutions designed for your specific needs. Whether you're managing a portfolio of properties, hosting guests, or securing your family home, we have the perfect solution.
            </p>
          </AnimatedSection>

          {/* Main Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            <AnimatedCard delay={0.1}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <motion.div
                    className="p-4 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Shield className="h-8 w-8 text-primary-400" />
                  </motion.div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-neutral-50 text-xl">Property Managers</CardTitle>
                    <Badge className="bg-primary-500/20 text-primary-400">Professional</Badge>
                  </div>
                  <CardDescription className="text-neutral-300 mb-4">
                    Enterprise-level security intelligence for managing multiple properties from a single unified dashboard.
                  </CardDescription>
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Multi-property dashboard with real-time monitoring</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Comprehensive access logs and automated reporting</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Intelligent event analysis and risk assessment</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Tenant and staff access management</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">API integration for property management systems</span>
                    </div>
                  </div>
                  <Link href="/products">
                    <Button className="w-full bg-primary-500 text-white hover:bg-primary-400">
                      View Professional Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <motion.div
                    className="p-4 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Key className="h-8 w-8 text-primary-400" />
                  </motion.div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-neutral-50 text-xl">Airbnb Hosts</CardTitle>
                    <Badge className="bg-primary-500/20 text-primary-400">Professional</Badge>
                  </div>
                  <CardDescription className="text-neutral-300 mb-4">
                    Seamless guest self-check-in with advanced face recognition and automated access management.
                  </CardDescription>
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Automated guest check-in with face recognition</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Temporary access codes for guests</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Trusted entry detection and visitor classification</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Integration with Airbnb calendar</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Automated check-out and security activation</span>
                    </div>
                  </div>
                  <Link href="/products">
                    <Button className="w-full bg-primary-500 text-white hover:bg-primary-400">
                      View Professional Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <motion.div
                    className="p-4 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <HomeIcon className="h-8 w-8 text-primary-400" />
                  </motion.div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-neutral-50 text-xl">Home Enthusiasts</CardTitle>
                    <Badge className="bg-primary-500/20 text-primary-400">Basic</Badge>
                  </div>
                  <CardDescription className="text-neutral-300 mb-4">
                    A fully modular DIY security ecosystem that grows with your needs and budget.
                  </CardDescription>
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Customizable automation and smart device integration</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Natural language control with LLM assistant</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Expandable system with à la carte add-ons</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Privacy-first local processing</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300 text-sm">Community support and documentation</span>
                    </div>
                  </div>
                  <Link href="/products">
                    <Button className="w-full bg-primary-500 text-white hover:bg-primary-400">
                      View Basic Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardHeader>
              </Card>
            </AnimatedCard>
          </div>

          {/* Key Features Section */}
          <AnimatedSection delay={0.4}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-50 text-center mb-4">
                Why Choose HomeGuard AI?
              </h2>
              <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI technology with reliable hardware to deliver enterprise-grade security for any property.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
            {[
              { icon: Brain, title: "AI-Powered", desc: "Advanced face recognition, object detection, and intelligent analysis" },
              { icon: Camera, title: "Comprehensive Coverage", desc: "Multi-camera network with edge AI processing" },
              { icon: Lock, title: "Secure Access", desc: "Automated locks, gates, and access control systems" },
              { icon: Zap, title: "Real-Time Response", desc: "Instant alerts and automated responses to security events" },
            ].map((feature, index) => (
              <AnimatedCard key={index} delay={0.5 + index * 0.1}>
                <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <motion.div
                      className="p-3 rounded-lg bg-primary-500/10 w-fit mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="h-6 w-6 text-primary-400" />
                    </motion.div>
                    <CardTitle className="text-neutral-50 text-lg mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-neutral-400 text-sm">
                      {feature.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          {/* Use Cases */}
          <AnimatedSection delay={0.9}>
            <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-neutral-50 text-center mb-8">
                Common Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Multi-Property Management",
                    desc: "Monitor and control access across your entire property portfolio from a single dashboard. Perfect for property management companies and real estate investors.",
                    icon: Building2,
                  },
                  {
                    title: "Short-Term Rental Security",
                    desc: "Automate guest check-ins, monitor property access, and ensure security between bookings. Ideal for Airbnb, VRBO, and other short-term rental hosts.",
                    icon: Key,
                  },
                  {
                    title: "Family Home Protection",
                    desc: "Protect your family with intelligent security that recognizes trusted faces, monitors entry points, and provides peace of mind through mobile alerts.",
                    icon: HomeIcon,
                  },
                  {
                    title: "Commercial Property Security",
                    desc: "Enterprise-grade security for offices, warehouses, and commercial facilities with advanced access control and comprehensive monitoring.",
                    icon: Shield,
                  },
                ].map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.0 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary-500/10 flex-shrink-0">
                      <useCase.icon className="h-5 w-5 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-50 mb-1">{useCase.title}</h3>
                      <p className="text-neutral-400 text-sm">{useCase.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA Section */}
          <AnimatedSection delay={1.4}>
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold text-neutral-50 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
                Choose the perfect plan for your needs or contact us for a custom solution tailored to your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button className="bg-primary-500 text-white hover:bg-primary-400 px-8 py-6 text-lg">
                    View Pricing Plans
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-primary-500/50 text-primary-400 hover:bg-primary-500/10 px-8 py-6 text-lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </div>
  )
}
