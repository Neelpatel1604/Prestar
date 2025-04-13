'use client';
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { CreditCard, ShoppingCart, Map, ArrowUpDown, Calendar, Download, Share2 } from 'lucide-react'

// Mock data for demonstration
const mockCardData = {
  cardNumber: '•••• •••• •••• 4321',
  balance: 75.50,
  expiryDate: '12/25',
  dailyLimit: 50,
  transactions: [
    { id: 1, date: new Date('2023-11-28'), location: 'Superstore', amount: 24.50, type: 'purchase' },
    { id: 2, date: new Date('2023-11-25'), location: 'No Frills', amount: 18.75, type: 'purchase' },
    { id: 3, date: new Date('2023-11-20'), location: 'Metro', amount: 32.60, type: 'purchase' },
    { id: 4, date: new Date('2023-11-15'), location: 'Prestar Funds', amount: 100.00, type: 'deposit' },
    { id: 5, date: new Date('2023-11-10'), location: 'Loblaws', amount: 27.80, type: 'purchase' }
  ],
  storesNearby: [
    { id: 1, name: 'Superstore', distance: '0.8 km', address: '123 Main St' },
    { id: 2, name: 'No Frills', distance: '1.2 km', address: '456 Oak Ave' },
    { id: 3, name: 'Metro', distance: '2.5 km', address: '789 Pine Blvd' }
  ]
}

export function GroceryCardManagement() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState<string>('card')
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-CA', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date)
  }
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Grocery Card Management</h1>
        <p className="text-gray-600">View your card details, transactions, and find partner stores</p>
      </div>
      
      <Tabs defaultValue="card" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="card">Card Details</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="stores">Partner Stores</TabsTrigger>
        </TabsList>
        
        <TabsContent value="card">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl p-6 shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs opacity-80 mb-1">Prestar</div>
                    <div className="text-xl font-semibold">Grocery Card</div>
                  </div>
                  <CreditCard className="h-8 w-8 opacity-80" />
                </div>
                
                <div className="mt-6 text-2xl font-bold">${mockCardData.balance.toFixed(2)}</div>
                <div className="text-xs opacity-80">Available Balance</div>
                
                <div className="mt-6 border-t border-white/20 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs opacity-80">Card Number</div>
                      <div className="text-sm mt-1">{mockCardData.cardNumber}</div>
                    </div>
                    <div>
                      <div className="text-xs opacity-80">Expiry Date</div>
                      <div className="text-sm mt-1">{mockCardData.expiryDate}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-3">Card Settings</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dailyLimit">Daily Spending Limit</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">$</span>
                        <Input
                          id="dailyLimit"
                          type="number"
                          defaultValue={mockCardData.dailyLimit}
                          className="rounded-l-none"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Card Controls</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Share Card
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700">
                        <Calendar className="h-4 w-4" />
                        Freeze Card
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full">Add Funds</Button>
              <Button variant="outline" className="w-full">Report Lost or Stolen</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your grocery card transaction history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {mockCardData.transactions.map(transaction => (
                  <div key={transaction.id} className="border-b py-3 last:border-0">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${transaction.type === 'deposit' ? 'bg-green-100' : 'bg-blue-100'}`}>
                          {transaction.type === 'deposit' 
                            ? <ArrowUpDown className="h-4 w-4 text-green-600" /> 
                            : <ShoppingCart className="h-4 w-4 text-blue-600" />
                          }
                        </div>
                        <div>
                          <div className="font-medium">{transaction.location}</div>
                          <div className="text-xs text-gray-500">{formatDate(transaction.date)}</div>
                        </div>
                      </div>
                      <div className={`font-semibold ${transaction.type === 'deposit' ? 'text-green-600' : ''}`}>
                        {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Statement
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="stores">
          <Card>
            <CardHeader>
              <CardTitle>Partner Stores Nearby</CardTitle>
              <CardDescription>Grocery stores that accept your Prestar card</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockCardData.storesNearby.map(store => (
                  <div key={store.id} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-blue-100">
                          <ShoppingCart className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">{store.name}</div>
                          <div className="text-xs text-gray-500">{store.address}</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{store.distance}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full flex items-center gap-2">
                <Map className="h-4 w-4" />
                View All Partner Stores
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 