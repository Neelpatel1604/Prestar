import { Layout } from '@/components/Layout'
import { LoanStatusCard } from '@/components/dashboard/LoanStatusCard'
import { FinancialWellnessCard } from '@/components/dashboard/FinancialWellnessCard'
import { QuickActionsCard } from '@/components/dashboard/QuickActionsCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ArrowRight, Award, BookOpen } from 'lucide-react'
import Link from 'next/link'

// Mock data for demonstration
const mockData = {
  loan: {
    loanAmount: 500,
    amountPaid: 200,
    nextPaymentDate: new Date('2023-12-15'),
    nextPaymentAmount: 100
  },
  wellness: {
    wellnessScore: 68,
    lastMonthScore: 62,
    tip: "Setting up automatic savings of just 5% of your income can boost your financial resilience significantly."
  },
  educationModules: [
    { id: 1, title: 'Budgeting Basics', progress: 100, time: '15 min' },
    { id: 2, title: 'Emergency Fund Essentials', progress: 60, time: '12 min' },
    { id: 3, title: 'Understanding Credit', progress: 0, time: '20 min' }
  ]
}

export default function DashboardPage() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome, Sarah</h1>
            <p className="text-gray-600">Your financial journey at a glance</p>
          </div>
          <Button asChild className="mt-4 md:mt-0">
            <Link href="/loans/apply">
              <span className="flex items-center">
                Apply for a New Loan
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <LoanStatusCard 
                    loanAmount={mockData.loan.loanAmount}
                    amountPaid={mockData.loan.amountPaid}
                    nextPaymentDate={mockData.loan.nextPaymentDate}
                    nextPaymentAmount={mockData.loan.nextPaymentAmount}
                  />
                  <FinancialWellnessCard 
                    wellnessScore={mockData.wellness.wellnessScore}
                    lastMonthScore={mockData.wellness.lastMonthScore}
                    tip={mockData.wellness.tip}
                  />
                </div>
              </TabsContent>
              <TabsContent value="education">
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      Financial Education Progress
                    </CardTitle>
                    <CardDescription>Continue learning to improve your financial literacy</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockData.educationModules.map(module => (
                        <div key={module.id} className="border rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-medium">{module.title}</div>
                            <div className="text-sm text-gray-500">{module.time}</div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${module.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-600">
                              {module.progress === 100 ? (
                                <span className="flex items-center text-green-600">
                                  <Award className="h-4 w-4 mr-1" />
                                  Completed
                                </span>
                              ) : (
                                `${module.progress}% complete`
                              )}
                            </div>
                            <Button size="sm" variant={module.progress === 100 ? "outline" : "default"}>
                              {module.progress === 100 ? 'Review' : 'Continue'}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline" asChild>
                      <Link href="/education/resources">View All Resources</Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <QuickActionsCard />
            <Card>
              <CardHeader>
                <CardTitle>Financial Tips</CardTitle>
                <CardDescription>Daily guidance to improve your finances</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    "Create a 50/30/20 budget: 50% for needs, 30% for wants, and 20% for savings and debt repayment."
                  </p>
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <Link href="/education/articles">More Tips</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
} 