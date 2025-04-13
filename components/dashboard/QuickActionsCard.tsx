import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { AlertCircle, Receipt, BarChart4, ArrowRight, FileText } from 'lucide-react'
import Link from 'next/link'

export function QuickActionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Tools and resources at your fingertips</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <Button className="justify-start h-auto py-4 bg-red-500 hover:bg-red-600" asChild>
            <Link href="/emergency-loan">
              <div className="flex items-center">
                <AlertCircle className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Emergency Assistance</div>
                  <div className="text-xs opacity-90">Get help for essential needs</div>
                </div>
              </div>
            </Link>
          </Button>
          
          <Button variant="outline" className="justify-start h-auto py-3" asChild>
            <Link href="/education/tools/budget">
              <div className="flex items-center">
                <BarChart4 className="mr-3 h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <div className="font-medium">Budget Planner</div>
                  <div className="text-xs text-gray-500">Create and track your budget</div>
                </div>
              </div>
            </Link>
          </Button>
          
          <Button variant="outline" className="justify-start h-auto py-3" asChild>
            <Link href="/loans/history">
              <div className="flex items-center">
                <Receipt className="mr-3 h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <div className="font-medium">Loan History</div>
                  <div className="text-xs text-gray-500">View past loan details</div>
                </div>
              </div>
            </Link>
          </Button>
          
          <Button variant="outline" className="justify-start h-auto py-3" asChild>
            <Link href="/education/articles">
              <div className="flex items-center">
                <FileText className="mr-3 h-5 w-5 text-blue-600" />
                <div className="text-left">
                  <div className="font-medium">Financial Articles</div>
                  <div className="text-xs text-gray-500">Browse educational content</div>
                </div>
              </div>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 