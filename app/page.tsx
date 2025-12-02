import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/ProductCard"
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
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-curser-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-b from-curser-bg via-curser-bgLight to-curser-bg text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-curser-primary mb-6">
            Smarter Rentals. Smarter Homes.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-curser-subtle max-w-2xl mx-auto mb-8">
            A fully integrated AI security system built for property managers, Airbnb hosts, and home enthusiasts.
          </p>
          <Button className="bg-curser-primary text-curser-bg hover:bg-curser-primaryLight px-8 py-6 text-lg">
            Explore Products
          </Button>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-curser-bgLight">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-curser-text text-center mb-12">
            Built for Modern Property Owners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-curser-card border-curser-primary/20 hover:border-curser-primary transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-curser-primary/10 w-fit mb-4">
                  <Shield className="h-6 w-6 text-curser-primary" />
                </div>
                <CardTitle className="text-curser-text mb-2">Property Managers</CardTitle>
                <CardDescription className="text-curser-subtle">
                  Smart access control with comprehensive logs. Manage multiple properties from one dashboard with real-time monitoring and automated reporting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-curser-card border-curser-primary/20 hover:border-curser-primary transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-curser-primary/10 w-fit mb-4">
                  <Key className="h-6 w-6 text-curser-primary" />
                </div>
                <CardTitle className="text-curser-text mb-2">Airbnb Hosts</CardTitle>
                <CardDescription className="text-curser-subtle">
                  Seamless guest self-check-in with face recognition. Automated access management that enhances guest experience while maintaining security.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-curser-card border-curser-primary/20 hover:border-curser-primary transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-curser-primary/10 w-fit mb-4">
                  <HomeIcon className="h-6 w-6 text-curser-primary" />
                </div>
                <CardTitle className="text-curser-text mb-2">Home Enthusiasts</CardTitle>
                <CardDescription className="text-curser-subtle">
                  DIY security ecosystem that grows with your needs. Customizable automation and smart device integration for the modern smart home.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-curser-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-curser-text text-center mb-12">
            Our Devices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              icon={Lock}
              title="CURSER Smart Lock"
              description="Pi Zero lock controller with face unlock and remote API access for seamless property management."
              badge="AI-Powered"
            />
            <ProductCard
              icon={Camera}
              title="AI Security Camera"
              description="Pi 5 / Pi 4 powered camera with face and object detection for comprehensive property monitoring."
              badge="AI-Powered"
            />
            <ProductCard
              icon={Brain}
              title="LLM Property Assistant"
              description="Task automation, log analysis, and intelligent alerts powered by advanced language models."
              badge="AI-Powered"
            />
            <ProductCard
              icon={Radio}
              title="Sensor Mesh Network"
              description="ESP32 nodes for motion, temperature, and tamper detection with low-power IoT connectivity."
              badge="IoT"
            />
            <ProductCard
              icon={Car}
              title="ALPR Gate System"
              description="Pi 5 + camera system for automatic vehicle entry using license plate recognition technology."
              badge="Automation"
            />
            <ProductCard
              icon={Bot}
              title="DIY Robotics Kit"
              description="BeagleBone Black + Arduino for home automation and robotics starter projects."
              badge="DIY"
            />
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-20 bg-curser-bgLight">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-curser-text text-center mb-12">
            Powered by Proven Hardware
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-curser-subtle mb-8">
                CURSER leverages industry-standard hardware components to deliver reliable, scalable security solutions. Our system is built on a foundation of proven technology.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-curser-primary"></div>
                  <span className="text-curser-text">2× Raspberry Pi 5</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-curser-primary"></div>
                  <span className="text-curser-text">1× Raspberry Pi 4</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-curser-primary"></div>
                  <span className="text-curser-text">2× Raspberry Pi Zero</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-curser-primary"></div>
                  <span className="text-curser-text">2× ESP32</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-curser-primary"></div>
                  <span className="text-curser-text">2× Arduino Uno</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-curser-primary"></div>
                  <span className="text-curser-text">1× Arduino Yun</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-curser-primary"></div>
                  <span className="text-curser-text">1× BeagleBone Black</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-curser-card border border-curser-primary/20 rounded-lg flex items-center justify-center hover:border-curser-primary transition-all duration-300 hover:shadow-lg hover:shadow-curser-primary/20"
                >
                  <div className="text-curser-subtle text-sm">Hardware {i}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-curser-bg to-curser-bgLight">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-curser-primary mb-6">
            Upgrade Your Property Security
          </h2>
          <p className="text-lg text-curser-subtle max-w-xl mx-auto mb-8">
            Experience the future of smart property management with CURSER's integrated AI security ecosystem.
          </p>
          <Button className="bg-curser-primary text-curser-bg hover:bg-curser-primaryLight px-8 py-6 text-lg">
            Request a Demo
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

