"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/ProductCard"
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Lock,
  Camera,
  Brain,
  Radio,
  Car,
  Bot,
  Shield,
  Key,
  Home as HomeIcon,
  Cpu,
  Zap,
  Eye,
  Smartphone,
  Bell,
  Activity,
  Database,
  Globe,
  Settings,
  Users,
  BarChart3,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-center overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Main radial gradient */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-sm md:text-base font-semibold text-primary-400 bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full backdrop-blur-sm">
              Next-Generation Security Technology
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              AI-Driven Distributed
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-primary-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Smart Home Security
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Next-generation, fully autonomous smart home security ecosystem with{" "}
            <span className="text-primary-400 font-semibold">enterprise-level intelligence</span>,{" "}
            <span className="text-blue-400 font-semibold">reliability</span>, and{" "}
            <span className="text-cyan-400 font-semibold">automation</span>. Edge AI, distributed computing, and real-time robotics-grade control in a unified platform.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-primary-500 to-blue-600 text-white hover:from-primary-400 hover:to-blue-500 px-10 py-7 text-lg font-semibold shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] transition-all duration-300">
                Explore Products
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400 px-10 py-7 text-lg font-semibold backdrop-blur-sm">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { label: "AI Processing", value: "Real-Time", icon: Brain },
              { label: "Camera Nodes", value: "Unlimited", icon: Camera },
              { label: "Response Time", value: "< 50ms", icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-neutral-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 text-primary-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary-400 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-neutral-50 text-center mb-4">
              Built for Modern Property Owners
            </h2>
            <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
              HomeGuard AI delivers intelligent security solutions tailored to your specific needs, whether you&apos;re managing multiple properties, hosting guests, or securing your personal residence.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Shield className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 mb-2">Property Managers</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Manage multiple properties from a single unified dashboard. Real-time monitoring, comprehensive access logs, automated reporting, and intelligent event analysis. HomeGuard AI provides enterprise-level security intelligence for your entire portfolio.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Key className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 mb-2">Airbnb Hosts</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Seamless guest self-check-in with advanced face recognition technology. Automated access management that enhances guest experience while maintaining comprehensive security. Trusted entry detection and intelligent visitor classification.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <HomeIcon className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 mb-2">Home Enthusiasts</CardTitle>
                  <CardDescription className="text-neutral-400">
                    A fully modular DIY security ecosystem that grows with your needs. Customizable automation, smart device integration, and natural language control. Build the smart home security system you&apos;ve always envisioned.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-neutral-50 text-center mb-4">
              HomeGuard Mobile & Web App Features
            </h2>
            <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
              Comprehensive mobile and web applications providing real-time monitoring, intelligent alerts, and complete system control from anywhere in the world.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatedCard delay={0.1}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Smartphone className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 text-lg mb-2">Real-Time Monitoring</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Live camera feeds, sensor status, and system health monitoring from your mobile device or web browser. View all cameras simultaneously with multi-stream support.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Bell className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 text-lg mb-2">Intelligent Alerts</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Push notifications for security events, motion detection, door access, and system anomalies. Customizable alert rules and severity levels with smart filtering.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Activity className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 text-lg mb-2">Event Timeline</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Comprehensive event log with timestamps, camera snapshots, and AI analysis. Filter by event type, time range, or location. Export reports for security audits.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Users className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 text-lg mb-2">User Management</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Multi-user access control with role-based permissions. Manage trusted faces, access schedules, and guest permissions. Family and staff management tools.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.5}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Lock className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 text-lg mb-2">Remote Access Control</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Lock and unlock doors remotely, control gates, and manage garage access. Temporary access codes for guests. Scheduled access windows and automatic locking.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.6}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <BarChart3 className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 text-lg mb-2">Analytics Dashboard</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Visual analytics showing access patterns, security events, system performance metrics, and energy usage. Historical trends and predictive insights.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.7}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Settings className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 text-lg mb-2">Automation Rules</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Create custom automation rules with if-then logic. Schedule-based actions, event-triggered responses, and AI-driven smart suggestions for optimal security.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.8}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Database className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 text-lg mb-2">Local & Cloud Storage</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Local storage on Pi 5 for privacy-first operation. Optional cloud backup for remote access. Configurable retention policies and automatic cleanup.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
            <AnimatedCard delay={0.9}>
              <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                <CardHeader>
                  <motion.div
                    className="p-3 rounded-lg bg-primary-500/10 w-fit mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Globe className="h-6 w-6 text-primary-400" />
                  </motion.div>
                  <CardTitle className="text-neutral-50 text-lg mb-2">Remote Access</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Secure remote access via VPN or encrypted tunnel. Access your HomeGuard system from anywhere while maintaining enterprise-grade security and privacy.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-neutral-50 text-center mb-4">
              Distributed Hardware Ecosystem
            </h2>
            <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
              HomeGuard AI leverages specialized hardware nodes, each optimized for specific roles in the security ecosystem. From AI inference to real-time motor control, every component is purpose-built for reliability and performance.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              icon={Cpu}
              title="Raspberry Pi 5 - AI Core"
              description="FastAPI backend, PostgreSQL database, AI inference engine (face recognition, object detection, LPR), web dashboard, MQTT broker, and automation engine. The central brain orchestrating every subsystem."
              badge="AI-Powered"
              delay={0.1}
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
              description="Intelligent 1080p camera endpoints with motion/person detection, RTSP streaming, and edge filtering. Deployed at front door, garage, backyard, and interior rooms for comprehensive coverage."
              badge="Edge AI"
              delay={0.2}
              specs={[
                "CPU: 1GHz quad-core ARM Cortex-A53",
                "RAM: 512MB",
                "Storage: 32GB+ microSD",
                "Camera: CSI camera module",
                "Network: WiFi 4",
                "Video: 1080p @ 30fps",
                "Protocol: RTSP streaming",
              ]}
            />
            <ProductCard
              icon={Brain}
              title="LLM Property Assistant"
              description="Natural language processing for commands, event summaries, risk assessments, and intelligent analysis. Convert spoken or text commands into structured security actions with GPT/llama integration."
              badge="AI-Powered"
              delay={0.3}
              specs={[
                "Models: GPT-4, Llama 3, local inference",
                "Response Time: < 2 seconds",
                "Languages: Multi-language support",
                "Commands: Natural language parsing",
                "Analysis: Event summarization",
                "Integration: REST API & WebSocket",
              ]}
            />
            <ProductCard
              icon={Cpu}
              title="NVIDIA Jetson Nano - Advanced AI Operations"
              description="High-performance AI accelerator for advanced computer vision tasks, multi-stream video processing, and complex neural network inference. Handles heavy AI workloads that require GPU acceleration."
              badge="GPU-Accelerated"
              delay={0.35}
              specs={[
                "GPU: 128-core NVIDIA Maxwell",
                "CPU: Quad-core ARM Cortex-A57",
                "RAM: 4GB 64-bit LPDDR4",
                "AI Performance: 472 GFLOPS (FP16)",
                "Video: 4K @ 30fps encode/decode",
                "Interfaces: USB 3.0, Gigabit Ethernet",
                "Power: 5V/4A or 5V/2A modes",
                "Framework: TensorRT, CUDA, cuDNN",
              ]}
            />
            <ProductCard
              icon={Radio}
              title="ESP32 Sensor Mesh Network"
              description="Wireless IoT network of ESP32 nodes providing door/window reed switches, PIR motion sensors, glass-break detection, temperature/humidity monitoring, RFID access control, and local alerts."
              badge="IoT"
              delay={0.4}
              specs={[
                "MCU: ESP32-WROOM-32",
                "Connectivity: WiFi, Bluetooth",
                "GPIO: 34 digital pins",
                "Power: 3.3V, low power modes",
                "Range: Up to 100m (WiFi)",
                "Battery: Optional LiPo support",
                "Protocol: MQTT over WiFi",
              ]}
            />
            <ProductCard
              icon={Zap}
              title="BeagleBone Black - Motor Control"
              description="Real-time deterministic control layer using PRUs for motorized door locks, gate openers, garage interface, and safety interrupts. Robotics-grade precision with stall detection and limit switches."
              badge="Real-Time"
              delay={0.5}
              specs={[
                "CPU: 1GHz ARM Cortex-A8",
                "PRUs: 2x Programmable Real-Time Units",
                "GPIO: 65+ pins",
                "Power: 5V DC",
                "PWM: Hardware PWM channels",
                "Response: < 50ms latency",
                "Safety: Stall detection, limit switches",
              ]}
            />
            <ProductCard
              icon={Eye}
              title="Arduino Due - IMU & Analog Processing"
              description="High-speed continuous data processing for IMU readings (shakes, forced entry), power sensing, door impact/vibration detection, and current monitoring of locks/motors. Provides rapid feedback to control systems."
              badge="High-Speed"
              delay={0.6}
              specs={[
                "MCU: AT91SAM3X8E (84MHz ARM Cortex-M3)",
                "Analog: 12-bit ADC (12 channels)",
                "IMU: 6-axis accelerometer/gyro",
                "Sampling: Up to 1kHz",
                "Communication: Serial, I2C, SPI",
                "Power: 7-12V DC",
              ]}
            />
            <ProductCard
              icon={Car}
              title="ALPR Gate System"
              description="Raspberry Pi 5 + camera system for automatic vehicle entry using advanced license plate recognition technology. Seamless access for trusted vehicles with real-time processing."
              badge="Automation"
              delay={0.7}
              specs={[
                "Camera: 8MP+ for LPR accuracy",
                "Processing: Real-time on Pi 5",
                "Recognition: OpenALPR or custom model",
                "Accuracy: > 95% in good conditions",
                "Response: < 500ms detection",
                "Integration: Gate control via BBB",
              ]}
            />
            <ProductCard
              icon={Bot}
              title="Arduino Uno - User Interfaces"
              description="Reliable low-level control for keypads, buzzers, LED indicators, and basic garage door buttons. Simple, dependable wired interfaces for direct user interaction."
              badge="Interface"
              delay={0.8}
              specs={[
                "MCU: ATmega328P (16MHz)",
                "GPIO: 14 digital, 6 analog",
                "Power: 5V DC",
                "Communication: Serial, I2C",
                "Reliability: Industrial-grade",
                "Interfaces: Keypad, buzzer, LEDs",
              ]}
            />
            <ProductCard
              icon={Lock}
              title="Arduino Yún - REST Bridge"
              description="REST-based utility controller exposing simple API endpoints for light control, unlock commands, and garage operations. Legacy bridge for non-mission-critical commands and integrations."
              badge="API"
              delay={0.9}
              specs={[
                "MCU: ATmega32U4 + Atheros AR9331",
                "Connectivity: WiFi, Ethernet",
                "API: REST endpoints",
                "Endpoints: /light/on, /unlock, /garage/open",
                "Protocol: HTTP/HTTPS",
                "Integration: Home automation systems",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-neutral-50 text-center mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
              HomeGuard AI leverages industry-standard hardware components optimized for AI inference, real-time processing, and distributed computing. Our architecture ensures reliability, performance, and scalability.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { 
                title: "AI Processing", 
                desc: "Raspberry Pi 5 & Jetson Nano", 
                specs: "Edge AI inference, face recognition, object detection"
              },
              { 
                title: "Camera Network", 
                desc: "Raspberry Pi Zero 2", 
                specs: "1080p streaming, motion detection, RTSP"
              },
              { 
                title: "Sensor Mesh", 
                desc: "ESP32 Nodes", 
                specs: "Motion, temperature, door/window sensors"
              },
              { 
                title: "Real-Time Control", 
                desc: "BeagleBone Black", 
                specs: "Motor control, locks, gates, PRU-based"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-neutral-800 border border-primary-500/20 rounded-lg p-6 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
              >
                <div className="text-primary-400 font-semibold text-lg mb-2">{item.title}</div>
                <div className="text-neutral-300 font-medium mb-3">{item.desc}</div>
                <div className="text-neutral-400 text-sm">{item.specs}</div>
              </motion.div>
            ))}
          </div>
          <AnimatedSection delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-neutral-400 max-w-3xl mx-auto">
                Each component is carefully selected for its specific role in the security ecosystem. From high-performance AI inference on Jetson Nano for advanced computer vision tasks, to real-time deterministic control on BeagleBone Black, every device contributes to a cohesive, intelligent security network.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-neutral-50 text-center mb-4">
              Key System Features
            </h2>
            <p className="text-center text-neutral-400 mb-12 max-w-2xl mx-auto">
              HomeGuard AI represents the evolution of home security—moving from simple alerts to intelligent situational awareness.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Powered Event Recognition",
                description: "Person detection, face recognition (trusted vs. unknown), license plate recognition, package detection, and behavior analysis. All AI runs locally on the Pi 5 for privacy and speed.",
              },
              {
                title: "Distributed Camera Network",
                description: "Every Pi Zero 2 provides motion detection, RTSP streaming, snapshot-based LLM analysis, and night vision support. Comprehensive visual coverage of your property.",
              },
              {
                title: "Sensor Fusion",
                description: "Combining data from ESP32 nodes, Due IMU sensors, BBB lock state sensors, and Pi Zero 2 visual input for real-time situational awareness.",
              },
              {
                title: "Automated Physical Control",
                description: "HomeGuard autonomously manages door locks, gates, garage doors, indoor sirens, and lights based on intelligent rule-based automation.",
              },
              {
                title: "Natural Language Interface",
                description: 'Speak or text normal commands like "Show me the last time someone was at the garage" or "Unlock the side door for 3 seconds." LLM integration converts natural language to actions.',
              },
              {
                title: "Local Operation (Privacy-First)",
                description: "All core processing is done on local hardware. Optional cloud usage only for remote access and backups. Your data stays private and secure.",
              },
            ].map((feature, index) => (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="bg-neutral-800 border-primary-500/20 hover:border-primary-500 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-neutral-50 text-lg">{feature.title}</CardTitle>
                    <CardDescription className="text-neutral-400">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary-500 mb-6">
              Upgrade Your Property Security
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
              Experience the future of smart property management with HomeGuard AI&apos;s integrated AI security ecosystem. Enterprise-level intelligence, reliability, and automation for your home.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-primary-500 text-white hover:bg-primary-400 px-8 py-6 text-lg">
                Request a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
