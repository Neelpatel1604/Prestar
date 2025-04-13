import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout>
      <div className="container mx-auto py-16 flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <AlertTriangle className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-3">Page Not Found</h1>
          <p className="text-gray-600 mb-6">
           Hang tight, we&apos;re bringing it to you soon. The page you&apos;re looking for is just around the corner!
          </p>
          <div className="space-y-3">
            <Button className="w-full" asChild>
              <Link href="/">
                Return Home
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/education/resources">
                Explore Financial Resources
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
} 