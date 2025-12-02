import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { AnimatedSection } from "@/components/AnimatedSection"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <h1 className="text-4xl font-bold text-primary-500 text-center mb-4 mt-12">
              Terms and Conditions
            </h1>
            <p className="text-neutral-400 text-center mb-12">
              Last Updated: January 2025
            </p>
          </AnimatedSection>

          <div className="space-y-8 text-neutral-300">
            <AnimatedSection delay={0.1}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral-400 leading-relaxed">
                  By accessing and using HomeGuard AI products, services, and software (collectively, the &quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">2. Product Description</h2>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  HomeGuard AI is an AI-driven distributed smart home security ecosystem consisting of:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4">
                  <li>Hardware components (Raspberry Pi, ESP32, Arduino, BeagleBone Black, etc.)</li>
                  <li>Software applications (mobile app, web dashboard, backend services)</li>
                  <li>AI and machine learning models for security analysis</li>
                  <li>Cloud services (optional, for remote access and backups)</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">3. Use License</h2>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  Permission is granted to temporarily use HomeGuard AI for personal, non-commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4">
                  <li>Modify or copy the software for commercial purposes</li>
                  <li>Attempt to reverse engineer, decompile, or disassemble the software</li>
                  <li>Remove any copyright or proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">4. Privacy and Data Security</h2>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  HomeGuard AI is designed with privacy-first principles:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-400 ml-4">
                  <li>All core AI processing occurs locally on your hardware</li>
                  <li>Video and sensor data are stored locally by default</li>
                  <li>Cloud services are optional and require explicit user consent</li>
                  <li>We do not sell or share your personal data with third parties</li>
                  <li>You retain full control over your data and can delete it at any time</li>
                </ul>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">5. Warranty and Disclaimer</h2>
                <p className="text-neutral-400 leading-relaxed mb-4">
                  The materials on HomeGuard AI&apos;s website and products are provided on an &apos;as is&apos; basis. HomeGuard AI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p className="text-neutral-400 leading-relaxed">
                  HomeGuard AI does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">6. Limitations</h2>
                <p className="text-neutral-400 leading-relaxed">
                  In no event shall HomeGuard AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HomeGuard AI&apos;s website, even if HomeGuard AI or a HomeGuard AI authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">7. Accuracy of Materials</h2>
                <p className="text-neutral-400 leading-relaxed">
                  The materials appearing on HomeGuard AI&apos;s website could include technical, typographical, or photographic errors. HomeGuard AI does not warrant that any of the materials on its website are accurate, complete, or current. HomeGuard AI may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">8. Links</h2>
                <p className="text-neutral-400 leading-relaxed">
                  HomeGuard AI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by HomeGuard AI of the site. Use of any such linked website is at the user&apos;s own risk.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={0.9}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">9. Modifications</h2>
                <p className="text-neutral-400 leading-relaxed">
                  HomeGuard AI may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={1.0}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">10. Governing Law</h2>
                <p className="text-neutral-400 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={1.1}>
              <section>
                <h2 className="text-2xl font-semibold text-primary-400 mb-4">11. Contact Information</h2>
                <p className="text-neutral-400 leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-neutral-300 mt-2">
                  Email: legal@homeguardai.com<br />
                  Website: https://homeguardai.com/contact
                </p>
              </section>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

