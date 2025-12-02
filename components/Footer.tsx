import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-curser-bgLight border-t border-curser-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-curser-primary mb-4">CURSER</h3>
            <p className="text-curser-subtle max-w-md">
              A fully integrated AI security system built for property managers, Airbnb hosts, and home enthusiasts.
            </p>
          </div>
          <div>
            <h4 className="text-curser-text font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-curser-subtle hover:text-curser-primary transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-curser-subtle hover:text-curser-primary transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-curser-text font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-curser-subtle hover:text-curser-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-curser-card text-center text-curser-subtle">
          <p>© 2025 CURSER. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

