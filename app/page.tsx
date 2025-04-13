import Image from "next/image";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle, ShieldCheck, BookOpen, Users } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Interest-Free Micro-Loans for Canadians in Need
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Prestar provides financial support and education to help you navigate difficult times with dignity and hope.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/loans/apply">
                    <span className="flex items-center">
                      Apply for a Loan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/education/resources">
                    Financial Education
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/family-finances.webp"
                  alt="Family managing finances"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Prestar Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple application process makes it easy to get the support you need quickly and without hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Application</h3>
              <p className="text-gray-600">
                Complete our simple application process in just 5-10 minutes with no credit check required.
              </p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Decision</h3>
              <p className="text-gray-600">
                Receive a decision within 24 hours, with most applications approved the same day.
              </p>
            </div>

            <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Immediate Support</h3>
              <p className="text-gray-600">
                Get funds through direct deposit that you can use immediately for essential needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Prestar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing financial help with dignity and respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">100% Interest-Free</h3>
                <p className="text-gray-600">
                  Our loans are completely interest-free. You only repay what you borrow, with flexible repayment schedules.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Financial Education</h3>
                <p className="text-gray-600">
                  Access free resources, tools, and guidance to improve your financial wellness and build security.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Support</h3>
                <p className="text-gray-600">
                  Join a community of Canadians helping each other through difficult times with dignity and respect.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-full">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Simple Process</h3>
                <p className="text-gray-600">
                  Our streamlined process means you can apply, get approved, and receive funds quickly without hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from Canadians who have used Prestar to overcome financial challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <p className="italic text-gray-700 mb-4">
                &quot;Prestar helped me bridge a difficult gap when I was between jobs. The interest-free loan was a lifesaver, and the financial education resources helped me create a better budget.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Sarah T.</p>
                  <p className="text-sm text-gray-500">Toronto, ON</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <p className="italic text-gray-700 mb-4">
                &quot;As a student, I was struggling to afford essentials while paying tuition. Prestar&apos;s interest-free loan helped me focus on my studies without worrying about where my next meal would come from.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Michael R.</p>
                  <p className="text-sm text-gray-500">Vancouver, BC</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <p className="italic text-gray-700 mb-4">
                &quot;After an unexpected medical emergency, I couldn&apos;t work for several weeks. Prestar&apos;s quick approval process meant I could still provide for my family during recovery.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Elena M.</p>
                  <p className="text-sm text-gray-500">Montreal, QC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply for an interest-free loan today or explore our financial education resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/loans/apply">
                Apply for a Loan
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/register">
                Create an Account
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
