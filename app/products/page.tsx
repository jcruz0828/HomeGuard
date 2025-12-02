import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/ProductCard"
import { Lock, Camera, Brain, Radio, Car, Bot } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-curser-bg">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-curser-text text-center mb-4 mt-12">
            Our Products
          </h1>
          <p className="text-curser-subtle text-center mb-12 max-w-2xl mx-auto">
            Explore our complete range of AI-powered security and automation devices.
          </p>
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
      </div>
      <Footer />
    </div>
  )
}

