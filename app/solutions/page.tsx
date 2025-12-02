import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Shield, Key, Home as HomeIcon } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-curser-bg">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-curser-text text-center mb-4 mt-12">
            Solutions
          </h1>
          <p className="text-curser-subtle text-center mb-12 max-w-2xl mx-auto">
            Tailored solutions for every type of property owner.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
      </div>
      <Footer />
    </div>
  )
}

