'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Progress } from '../ui/progress'
import { Button } from '../ui/button'
import { Calendar, DollarSign } from 'lucide-react'

interface LoanStatusCardProps {
  loanAmount: number
  amountPaid: number
  nextPaymentDate: Date
  nextPaymentAmount: number
}

export function LoanStatusCard({ 
  loanAmount, 
  amountPaid, 
  nextPaymentDate, 
  nextPaymentAmount 
}: LoanStatusCardProps) {
  const progressPercentage = Math.round((amountPaid / loanAmount) * 100)
  const formattedNextPaymentDate = new Intl.DateTimeFormat('en-CA', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }).format(nextPaymentDate)
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Loan Status</CardTitle>
        <CardDescription>Track your interest-free loan progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Repayment Progress</span>
            <span className="text-sm font-medium">{progressPercentage}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-blue-50 p-3">
            <div className="text-xs text-gray-500">Total Loan</div>
            <div className="text-lg font-semibold flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-blue-600" />
              ${loanAmount.toFixed(2)}
            </div>
          </div>
          <div className="rounded-lg bg-blue-50 p-3">
            <div className="text-xs text-gray-500">Paid So Far</div>
            <div className="text-lg font-semibold flex items-center">
              <DollarSign className="h-4 w-4 mr-1 text-blue-600" />
              ${amountPaid.toFixed(2)}
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-3">
          <div className="text-sm font-medium mb-2">Next Payment</div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{formattedNextPaymentDate}</span>
            </div>
            <div className="font-semibold">${nextPaymentAmount.toFixed(2)}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Make a Payment</Button>
      </CardFooter>
    </Card>
  )
} 