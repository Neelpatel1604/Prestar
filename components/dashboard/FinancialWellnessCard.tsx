'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight, LightbulbIcon } from 'lucide-react'
import Link from 'next/link'

interface FinancialWellnessCardProps {
  wellnessScore: number
  lastMonthScore?: number
  tip: string
}

export function FinancialWellnessCard({ 
  wellnessScore, 
  lastMonthScore,
  tip
}: FinancialWellnessCardProps) {
  const scoreChange = lastMonthScore ? wellnessScore - lastMonthScore : 0
  const scoreImprovement = scoreChange >= 0
  
  // Function to determine wellness status text and color
  const getWellnessStatus = (score: number) => {
    if (score >= 80) return { text: 'Excellent', color: 'text-green-600' }
    if (score >= 60) return { text: 'Good', color: 'text-blue-600' }
    if (score >= 40) return { text: 'Fair', color: 'text-yellow-600' }
    return { text: 'Needs Improvement', color: 'text-red-600' }
  }
  
  const wellnessStatus = getWellnessStatus(wellnessScore)
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Wellness</CardTitle>
        <CardDescription>Your personal financial health score</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-32 w-32">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#e2e8f0" 
                strokeWidth="10" 
              />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="10" 
                strokeDasharray={`${wellnessScore * 2.83} 283`} 
                strokeLinecap="round" 
                transform="rotate(-90 50 50)" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold">{wellnessScore}</span>
              <span className={`text-sm font-medium ${wellnessStatus.color}`}>{wellnessStatus.text}</span>
            </div>
          </div>
          
          {lastMonthScore && (
            <div className="mt-2 flex items-center space-x-1 text-sm">
              <span>Since last month:</span>
              <div className={scoreImprovement ? 'text-green-600' : 'text-red-600'}>
                {scoreImprovement ? '↑' : '↓'} {Math.abs(scoreChange)} points
              </div>
            </div>
          )}
        </div>
        
        <div className="rounded-lg bg-blue-50 p-3">
          <div className="flex items-start gap-2">
            <LightbulbIcon className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-medium mb-1 text-sm">Financial Tip</div>
              <p className="text-sm text-gray-700">{tip}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/education/tools">
            <span className="flex items-center">
              Improve Your Score
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 