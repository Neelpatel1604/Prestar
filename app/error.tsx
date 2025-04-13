'use client'

import { Layout } from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { AlertOctagon } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Layout>
      <div className="container mx-auto py-16 flex flex-col items-center justify-center">
        <div className="max-w-md w-full bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <AlertOctagon className="h-10 w-10 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold mb-3">Something Went Wrong</h1>
          <p className="text-gray-600 mb-6">
            We will bring that soon. We&apos;re currently working on this feature.
          </p>
          <div className="space-y-3">
            <Button 
              className="w-full" 
              onClick={() => reset()}
            >
              Try Again
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
} 