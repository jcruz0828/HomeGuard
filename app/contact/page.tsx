import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-curser-bg">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-curser-text text-center mb-4 mt-12">
            Contact Us
          </h1>
          <p className="text-curser-subtle text-center mb-12 max-w-2xl mx-auto">
            Get in touch with our team to learn more about CURSER or request a demo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-curser-card border-curser-primary/20">
              <CardHeader className="text-center">
                <Mail className="h-8 w-8 text-curser-primary mx-auto mb-4" />
                <CardTitle className="text-curser-text">Email</CardTitle>
                <CardDescription className="text-curser-subtle">
                  info@curser.ai
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-curser-card border-curser-primary/20">
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 text-curser-primary mx-auto mb-4" />
                <CardTitle className="text-curser-text">Phone</CardTitle>
                <CardDescription className="text-curser-subtle">
                  +1 (555) 123-4567
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-curser-card border-curser-primary/20">
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-curser-primary mx-auto mb-4" />
                <CardTitle className="text-curser-text">Location</CardTitle>
                <CardDescription className="text-curser-subtle">
                  San Francisco, CA
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-curser-card border-curser-primary/20">
              <CardHeader>
                <CardTitle className="text-curser-text mb-4">Request a Demo</CardTitle>
                <CardDescription className="text-curser-subtle mb-6">
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-curser-bg border border-curser-primary/20 rounded-lg text-curser-text placeholder-curser-subtle focus:outline-none focus:border-curser-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-curser-bg border border-curser-primary/20 rounded-lg text-curser-text placeholder-curser-subtle focus:outline-none focus:border-curser-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={6}
                      className="w-full px-4 py-3 bg-curser-bg border border-curser-primary/20 rounded-lg text-curser-text placeholder-curser-subtle focus:outline-none focus:border-curser-primary resize-none"
                    />
                  </div>
                  <Button className="w-full bg-curser-primary text-curser-bg hover:bg-curser-primaryLight">
                    Send Message
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

