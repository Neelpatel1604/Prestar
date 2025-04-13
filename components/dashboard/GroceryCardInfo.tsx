'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { CreditCard, ShoppingCart, Map, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface GroceryCardInfoProps {
  cardBalance: number
  lastTransaction: {
    amount: number
    date: Date
    location: string
  }
}

export function GroceryCardInfo({ cardBalance, lastTransaction }: GroceryCardInfoProps) {
  const formattedDate = new Intl.DateTimeFormat('en-CA', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  }).format(lastTransaction.date)
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-blue-600" />
          Grocery Card
        </CardTitle>
        <CardDescription>Your dedicated card for essential needs</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-4 shadow-md">
          <div className="text-xs opacity-80 mb-1">Current Balance</div>
          <div className="text-2xl font-bold">${cardBalance.toFixed(2)}</div>
          
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="flex justify-between items-center">
              <div className="text-xs opacity-80">Card Number</div>
              <div className="text-sm">•••• •••• •••• 4321</div>
            </div>
          </div>
        </div>
        
        {lastTransaction && (
          <div className="border rounded-lg p-3">
            <div className="text-sm font-medium mb-2">Last Transaction</div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{lastTransaction.location}</span>
              </div>
              <div className="font-semibold">-${lastTransaction.amount.toFixed(2)}</div>
            </div>
            <div className="text-xs text-gray-500">{formattedDate}</div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full" asChild>
          <Link href="/grocery-card/manage">
            <span className="flex items-center">
              Manage Card
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </Button>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/grocery-card/stores">
            <span className="flex items-center">
              <Map className="mr-2 h-4 w-4" />
              Find Partner Stores
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
} 