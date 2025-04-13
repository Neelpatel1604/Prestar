import Link from 'next/link'
import { Button } from './ui/button'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-blue-50 py-12 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Prestar Canada</h3>
            <p className="text-sm text-gray-600 mb-4">
              Providing interest-free micro-loans and financial education to Canadians in need.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/loans/apply" className="text-gray-600 hover:text-blue-600">
                  Apply for a Loan
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 hover:text-blue-600">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/education/resources" className="text-gray-600 hover:text-blue-600">
                  Financial Education
                </Link>
              </li>
              <li>
                <Link href="/education/tools" className="text-gray-600 hover:text-blue-600">
                  Budgeting Tools
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span>1-800-PRESTAR</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span>support@prestarcanada.org</span>
              </li>
            </ul>
            <Button className="mt-4" size="sm">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Prestar Canada. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 