"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/ProductCard"
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Cpu, Camera, Brain, Radio, Car, Bot, Zap, Eye, Lock, Check, Sparkles } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-500 text-center mb-4 mt-12">
              Subscription Plans & Packages
            </h1>
            <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto text-lg">
              Choose a complete package or build your own solution. All plans include hardware, software, cloud services, and ongoing support.
            </p>
          </AnimatedSection>

          {/* Subscription Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <AnimatedCard delay={0.1}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neutral-50">Basic</h3>
                    <Badge className="bg-primary-500/20 text-primary-400">Starter</Badge>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-400">$99</span>
                    <span className="text-neutral-400 ml-2">/month</span>
                  </div>
                  <CardDescription className="text-neutral-300 mb-6">
                    Perfect for single-family homes and small properties
                  </CardDescription>
                </CardHeader>
                <div className="px-6 pb-6 flex-grow">
                  <ul className="space-y-3 mb-6">
                    {[
                      "1× Raspberry Pi 5 AI Core",
                      "2× Pi Zero 2 Camera Nodes",
                      "5× ESP32 Sensor Nodes",
                      "Basic AI Face Recognition",
                      "Mobile & Web App Access",
                      "Cloud Storage (30 days)",
                      "Email Support",
                      "Basic Automation Rules",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <Button className="w-full bg-primary-500 text-white hover:bg-primary-400">
                    Get Started
                  </Button>
                </div>
              </Card>
            </AnimatedCard>

            {/* Professional Plan - Featured */}
            <AnimatedCard delay={0.2}>
              <Card className="bg-neutral-900 border-primary-500 hover:border-primary-400 transition-all duration-300 h-full flex flex-col relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary-500 to-blue-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="pt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neutral-50">Professional</h3>
                    <Sparkles className="h-5 w-5 text-primary-400" />
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-400">$249</span>
                    <span className="text-neutral-400 ml-2">/month</span>
                  </div>
                  <CardDescription className="text-neutral-300 mb-6">
                    Ideal for property managers and Airbnb hosts
                  </CardDescription>
                </CardHeader>
                <div className="px-6 pb-6 flex-grow">
                  <ul className="space-y-3 mb-6">
                    {[
                      "1× Raspberry Pi 5 AI Core",
                      "4× Pi Zero 2 Camera Nodes",
                      "10× ESP32 Sensor Nodes",
                      "1× BeagleBone Black (Motor Control)",
                      "Advanced AI (Face, Object, LPR)",
                      "LLM Property Assistant",
                      "Mobile & Web App Access",
                      "Cloud Storage (90 days)",
                      "Priority Support",
                      "Advanced Automation",
                      "Multi-Property Dashboard",
                      "API Access",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <Button className="w-full bg-gradient-to-r from-primary-500 to-blue-600 text-white hover:from-primary-400 hover:to-blue-500">
                    Get Started
                  </Button>
                </div>
              </Card>
            </AnimatedCard>

            {/* Enterprise Plan */}
            <AnimatedCard delay={0.3}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neutral-50">Enterprise</h3>
                    <Badge className="bg-primary-500/20 text-primary-400">Custom</Badge>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary-400">Custom</span>
                    <span className="text-neutral-400 ml-2">pricing</span>
                  </div>
                  <CardDescription className="text-neutral-300 mb-6">
                    For large portfolios and advanced requirements
                  </CardDescription>
                </CardHeader>
                <div className="px-6 pb-6 flex-grow">
                  <ul className="space-y-3 mb-6">
                    {[
                      "Multiple AI Cores (Pi 5 + Jetson Nano)",
                      "Unlimited Camera Nodes",
                      "Unlimited Sensor Nodes",
                      "Advanced Motor Control Systems",
                      "GPU-Accelerated AI Processing",
                      "Custom AI Model Training",
                      "Dedicated Support Team",
                      "Cloud Storage (Unlimited)",
                      "24/7 Priority Support",
                      "Custom Integrations",
                      "White-Label Options",
                      "SLA Guarantees",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <Button className="w-full bg-primary-500 text-white hover:bg-primary-400">
                    Contact Sales
                  </Button>
                </div>
              </Card>
            </AnimatedCard>
          </div>

          {/* À La Carte Add-Ons */}
          <AnimatedSection delay={0.4}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-50 text-center mb-4">
                À La Carte Add-Ons
              </h2>
              <p className="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
                Customize your plan with additional components and services. All add-ons are billed monthly.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <ProductCard
              icon={Camera}
              title="Additional Camera Node"
              description="Add more Pi Zero 2 camera nodes to expand coverage. Each includes motion detection, RTSP streaming, and edge AI processing."
              badge="Add-On"
              price="$15/month per node"
              delay={0.5}
              specs={[
                "1080p @ 30fps streaming",
                "Motion & person detection",
                "Edge AI filtering",
                "RTSP protocol support",
              ]}
            />
            <ProductCard
              icon={Radio}
              title="Sensor Node Pack"
              description="Expand your sensor mesh with additional ESP32 nodes. Perfect for monitoring more doors, windows, and areas."
              badge="Add-On"
              price="$8/month per node"
              delay={0.6}
              specs={[
                "Door/window sensors",
                "Motion detection",
                "Temperature monitoring",
                "Battery or wired power",
              ]}
            />
            <ProductCard
              icon={Cpu}
              title="Jetson Nano AI Accelerator"
              description="Upgrade to GPU-accelerated AI processing for advanced computer vision, multi-stream analysis, and complex neural networks."
              badge="Premium"
              price="$49/month"
              delay={0.7}
              specs={[
                "128-core NVIDIA GPU",
                "472 GFLOPS AI performance",
                "4K video processing",
                "TensorRT optimization",
              ]}
            />
            <ProductCard
              icon={Car}
              title="ALPR Gate System"
              description="Automatic license plate recognition for seamless vehicle access. Includes camera, processing, and gate integration."
              badge="Add-On"
              price="$39/month"
              delay={0.8}
              specs={[
                "Real-time LPR processing",
                "> 95% accuracy",
                "Gate control integration",
                "Trusted vehicle database",
              ]}
            />
            <ProductCard
              icon={Zap}
              title="Extended Cloud Storage"
              description="Increase your cloud storage retention period. Available in 30, 90, 180, or 365-day retention options."
              badge="Add-On"
              price="From $9/month"
              delay={0.9}
              specs={[
                "30-day: $9/month",
                "90-day: $19/month",
                "180-day: $29/month",
                "365-day: $49/month",
              ]}
            />
            <ProductCard
              icon={Brain}
              title="Advanced AI Features"
              description="Unlock premium AI capabilities including custom model training, behavior analysis, and predictive insights."
              badge="Premium"
              price="$29/month"
              delay={1.0}
              specs={[
                "Custom AI model training",
                "Behavior pattern analysis",
                "Predictive security insights",
                "Advanced object classification",
              ]}
            />
          </div>

          {/* Hardware Specifications */}
          <AnimatedSection delay={1.1}>
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-neutral-50 text-center mb-4">
                Hardware Specifications
              </h2>
              <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
                All hardware is included in your subscription. We handle setup, maintenance, and upgrades.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              icon={Cpu}
              title="Raspberry Pi 5 - AI Core"
              description="FastAPI backend, PostgreSQL database, AI inference engine (face recognition, object detection, LPR), web dashboard, MQTT broker, and automation engine."
              badge="AI-Powered"
              delay={1.2}
              specs={[
                "CPU: 2.4GHz quad-core ARM Cortex-A76",
                "RAM: 4GB minimum, 8GB recommended",
                "Storage: 64GB+ microSD or SSD",
                "Network: Gigabit Ethernet, WiFi 5",
                "Power: 5V 5A USB-C",
                "OS: Raspberry Pi OS (64-bit)",
              ]}
            />
            <ProductCard
              icon={Camera}
              title="Pi Zero 2 - Smart Camera Nodes"
              description="Intelligent 1080p camera endpoints with motion/person detection, RTSP streaming, and edge filtering."
              badge="Edge AI"
              delay={1.3}
              specs={[
                "CPU: 1GHz quad-core ARM Cortex-A53",
                "RAM: 512MB",
                "Storage: 32GB+ microSD",
                "Camera: CSI camera module",
                "Network: WiFi 4",
                "Video: 1080p @ 30fps",
              ]}
            />
            <ProductCard
              icon={Cpu}
              title="NVIDIA Jetson Nano - Advanced AI"
              description="High-performance AI accelerator for advanced computer vision tasks, multi-stream video processing, and complex neural network inference."
              badge="GPU-Accelerated"
              delay={1.4}
              specs={[
                "GPU: 128-core NVIDIA Maxwell",
                "CPU: Quad-core ARM Cortex-A57",
                "RAM: 4GB 64-bit LPDDR4",
                "AI Performance: 472 GFLOPS (FP16)",
                "Video: 4K @ 30fps encode/decode",
                "Framework: TensorRT, CUDA, cuDNN",
              ]}
            />
            <ProductCard
              icon={Radio}
              title="ESP32 Sensor Mesh Network"
              description="Wireless IoT network of ESP32 nodes providing door/window reed switches, PIR motion sensors, glass-break detection, and more."
              badge="IoT"
              delay={1.5}
              specs={[
                "MCU: ESP32-WROOM-32",
                "Connectivity: WiFi, Bluetooth",
                "GPIO: 34 digital pins",
                "Power: 3.3V, low power modes",
                "Range: Up to 100m (WiFi)",
                "Protocol: MQTT over WiFi",
              ]}
            />
            <ProductCard
              icon={Zap}
              title="BeagleBone Black - Motor Control"
              description="Real-time deterministic control layer using PRUs for motorized door locks, gate openers, garage interface, and safety interrupts."
              badge="Real-Time"
              delay={1.6}
              specs={[
                "CPU: 1GHz ARM Cortex-A8",
                "PRUs: 2x Programmable Real-Time Units",
                "GPIO: 65+ pins",
                "PWM: Hardware PWM channels",
                "Response: < 50ms latency",
                "Safety: Stall detection, limit switches",
              ]}
            />
            <ProductCard
              icon={Eye}
              title="Arduino Due - IMU & Analog"
              description="High-speed continuous data processing for IMU readings, power sensing, door impact/vibration detection, and current monitoring."
              badge="High-Speed"
              delay={1.7}
              specs={[
                "MCU: AT91SAM3X8E (84MHz ARM Cortex-M3)",
                "Analog: 12-bit ADC (12 channels)",
                "IMU: 6-axis accelerometer/gyro",
                "Sampling: Up to 1kHz",
                "Communication: Serial, I2C, SPI",
              ]}
            />
          </div>

          <AnimatedSection delay={1.8}>
            <div className="mt-16 text-center">
              <p className="text-neutral-400 mb-6">
                Need help choosing the right plan? Our team can help you build a custom solution.
              </p>
              <a
                href="/contact"
                className="inline-block bg-primary-500 text-white hover:bg-primary-400 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Us for Custom Solutions
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <Footer />
    </div>
  )
}
