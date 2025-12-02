"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection"
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle, Send, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-500 text-center mb-4 mt-12">
              Get in Touch
            </h1>
            <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto text-lg">
              Have questions? We&apos;re here to help. Reach out to our team for support, sales inquiries, or technical assistance.
            </p>
          </AnimatedSection>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
            <AnimatedCard delay={0.1}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <motion.div
                    className="p-4 rounded-full bg-primary-500/10 w-fit mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 mb-2">Email Us</CardTitle>
                  <CardDescription className="text-neutral-400 mb-2">
                    General inquiries
                  </CardDescription>
                  <a
                    href="mailto:info@homeguardai.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                  >
                    info@homeguardai.com
                  </a>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <motion.div
                    className="p-4 rounded-full bg-primary-500/10 w-fit mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Phone className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 mb-2">Call Us</CardTitle>
                  <CardDescription className="text-neutral-400 mb-2">
                    Sales & Support
                  </CardDescription>
                  <a
                    href="tel:+15551234567"
                    className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                  >
                    +1 (555) 123-4567
                  </a>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <motion.div
                    className="p-4 rounded-full bg-primary-500/10 w-fit mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 mb-2">Visit Us</CardTitle>
                  <CardDescription className="text-neutral-400 mb-2">
                    Our Office
                  </CardDescription>
                  <p className="text-primary-400 text-sm font-medium">
                    San Francisco, CA
                  </p>
                </CardHeader>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <motion.div
                    className="p-4 rounded-full bg-primary-500/10 w-fit mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Clock className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 mb-2">Business Hours</CardTitle>
                  <CardDescription className="text-neutral-400 mb-2">
                    Support Available
                  </CardDescription>
                  <p className="text-primary-400 text-sm font-medium">
                    Mon-Fri: 9AM-6PM PST
                  </p>
                </CardHeader>
              </Card>
            </AnimatedCard>
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedCard delay={0.5}>
                <Card className="bg-neutral-800 border-primary-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <MessageSquare className="h-5 w-5 text-primary-400" />
                      <CardTitle className="text-neutral-50">Send Us a Message</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-400 mb-6">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </CardDescription>
                    {formSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 bg-primary-500/10 border border-primary-500/20 rounded-lg text-center"
                      >
                        <CheckCircle2 className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-neutral-50 mb-2">Message Sent!</h3>
                        <p className="text-neutral-400">We&apos;ll get back to you within 24 hours.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                              First Name
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-4 py-3 bg-neutral-900 border border-primary-500/20 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-neutral-300 mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full px-4 py-3 bg-neutral-900 border border-primary-500/20 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-300 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 bg-neutral-900 border border-primary-500/20 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-300 mb-2">
                            Phone Number (Optional)
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 bg-neutral-900 border border-primary-500/20 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-300 mb-2">
                            Subject
                          </label>
                          <select
                            required
                            className="w-full px-4 py-3 bg-neutral-900 border border-primary-500/20 rounded-lg text-neutral-50 focus:outline-none focus:border-primary-500 transition-colors"
                          >
                            <option value="">Select a subject</option>
                            <option value="sales">Sales Inquiry</option>
                            <option value="support">Technical Support</option>
                            <option value="demo">Request Demo</option>
                            <option value="partnership">Partnership</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-300 mb-2">
                            Message
                          </label>
                          <textarea
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-neutral-900 border border-primary-500/20 rounded-lg text-neutral-50 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                            placeholder="Tell us how we can help..."
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-primary-500 text-white hover:bg-primary-400"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardHeader>
                </Card>
              </AnimatedCard>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              <AnimatedCard delay={0.6}>
                <Card className="bg-neutral-800 border-primary-500/20">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-4">
                      <HelpCircle className="h-5 w-5 text-primary-400" />
                      <CardTitle className="text-neutral-50">Quick Links</CardTitle>
                    </div>
                    <div className="space-y-3">
                      <a
                        href="/products"
                        className="block text-primary-400 hover:text-primary-300 transition-colors text-sm"
                      >
                        View Pricing Plans →
                      </a>
                      <a
                        href="/solutions"
                        className="block text-primary-400 hover:text-primary-300 transition-colors text-sm"
                      >
                        Explore Solutions →
                      </a>
                      <a
                        href="/terms"
                        className="block text-primary-400 hover:text-primary-300 transition-colors text-sm"
                      >
                        Terms & Conditions →
                      </a>
                    </div>
                  </CardHeader>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={0.7}>
                <Card className="bg-neutral-800 border-primary-500/20">
                  <CardHeader>
                    <CardTitle className="text-neutral-50 mb-4">Support Resources</CardTitle>
                    <div className="space-y-3 text-sm text-neutral-400">
                      <p>
                        <strong className="text-neutral-300">Technical Support:</strong><br />
                        support@homeguardai.com
                      </p>
                      <p>
                        <strong className="text-neutral-300">Sales Inquiries:</strong><br />
                        sales@homeguardai.com
                      </p>
                      <p>
                        <strong className="text-neutral-300">Response Time:</strong><br />
                        Within 24 hours
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              </AnimatedCard>
            </div>
          </div>

          {/* FAQ Section */}
          <AnimatedSection delay={0.8}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-neutral-50 text-center mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-neutral-400 text-center mb-12">
                Quick answers to common questions. Can&apos;t find what you&apos;re looking for? Contact us!
              </p>
              <div className="space-y-4">
                {[
                  {
                    q: "What's included in the subscription?",
                    a: "All subscription plans include hardware, software, cloud services, mobile and web apps, and ongoing support. No additional setup fees or hidden costs.",
                  },
                  {
                    q: "Can I customize my plan?",
                    a: "Yes! We offer à la carte add-ons so you can customize your system with additional cameras, sensors, or premium features as needed.",
                  },
                  {
                    q: "How long does installation take?",
                    a: "Professional installation typically takes 2-4 hours depending on the size of your property and system complexity. DIY installation guides are also available.",
                  },
                  {
                    q: "Is my data secure?",
                    a: "Absolutely. All AI processing happens locally on your hardware. Cloud storage is optional and encrypted. We never sell or share your data.",
                  },
                  {
                    q: "What happens if hardware fails?",
                    a: "All hardware is covered under warranty. We provide replacement units and technical support to ensure minimal downtime.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-neutral-50 text-lg mb-2">{faq.q}</CardTitle>
                        <CardDescription className="text-neutral-400">
                          {faq.a}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </div>
  )
}
