'use client';
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { CheckCircle, Coffee, LayoutDashboard, CircleDollarSign, FileText, ShoppingCart, Utensils, Send } from 'lucide-react'

// Define the steps for the loan application
const steps = [
  { id: 'eligibility', title: 'Eligibility Check' },
  { id: 'needs', title: 'Needs Assessment' },
  { id: 'verification', title: 'Verification' },
  { id: 'review', title: 'Review & Submit' },
  { id: 'complete', title: 'Complete' }
]

export function LoanApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    employmentStatus: '',
    monthlyIncome: '',
    residentialStatus: '',
    loanPurpose: '',
    loanAmount: '',
    loanExplanation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    preferredDisbursement: 'direct-deposit'
  })
  
  const updateForm = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }))
  }
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    nextStep()
  }
  
  // Render form steps based on current step
  const renderFormStep = () => {
    switch (steps[currentStep].id) {
      case 'eligibility':
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="employmentStatus">Employment Status</Label>
                <Select
                  value={formData.employmentStatus}
                  onValueChange={value => updateForm('employmentStatus', value)}
                >
                  <SelectTrigger id="employmentStatus">
                    <SelectValue placeholder="Select your employment status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time employed</SelectItem>
                    <SelectItem value="part-time">Part-time employed</SelectItem>
                    <SelectItem value="self-employed">Self-employed</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="monthlyIncome">Monthly Income (CAD)</Label>
                <Input
                  id="monthlyIncome"
                  placeholder="e.g. 2000"
                  value={formData.monthlyIncome}
                  onChange={e => updateForm('monthlyIncome', e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="residentialStatus">Residential Status</Label>
                <Select
                  value={formData.residentialStatus}
                  onValueChange={value => updateForm('residentialStatus', value)}
                >
                  <SelectTrigger id="residentialStatus">
                    <SelectValue placeholder="Select your residential status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="own">Homeowner</SelectItem>
                    <SelectItem value="rent">Renting</SelectItem>
                    <SelectItem value="with-family">Living with family</SelectItem>
                    <SelectItem value="student-housing">Student housing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p>This information helps us determine your eligibility for an interest-free loan. Prestar does not perform credit checks.</p>
            </div>
          </>
        )
      
      case 'needs':
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Loan Purpose</Label>
                <RadioGroup
                  value={formData.loanPurpose}
                  onValueChange={value => updateForm('loanPurpose', value)}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-blue-50">
                    <RadioGroupItem value="groceries" id="groceries" className="sr-only" />
                    <Label htmlFor="groceries" className="flex items-center gap-2 cursor-pointer w-full">
                      <ShoppingCart className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Groceries</div>
                        <div className="text-xs text-gray-500">Essential food items</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-blue-50">
                    <RadioGroupItem value="utilities" id="utilities" className="sr-only" />
                    <Label htmlFor="utilities" className="flex items-center gap-2 cursor-pointer w-full">
                      <CircleDollarSign className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Utilities</div>
                        <div className="text-xs text-gray-500">Bills &amp; essential services</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-blue-50">
                    <RadioGroupItem value="housing" id="housing" className="sr-only" />
                    <Label htmlFor="housing" className="flex items-center gap-2 cursor-pointer w-full">
                      <LayoutDashboard className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Housing</div>
                        <div className="text-xs text-gray-500">Rent or housing costs</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-blue-50">
                    <RadioGroupItem value="other" id="other" className="sr-only" />
                    <Label htmlFor="other" className="flex items-center gap-2 cursor-pointer w-full">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Other</div>
                        <div className="text-xs text-gray-500">Other essential needs</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="loanAmount">Loan Amount Needed (CAD)</Label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground">$</span>
                  <Input
                    id="loanAmount"
                    placeholder="100"
                    className="rounded-l-none"
                    value={formData.loanAmount}
                    onChange={e => updateForm('loanAmount', e.target.value)}
                  />
                </div>
                <p className="text-xs text-gray-500">Loans range from $50 to $500</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="loanExplanation">Please briefly explain your need</Label>
                <Textarea
                  id="loanExplanation"
                  placeholder="Tell us a bit more about your current situation and need for this loan..."
                  value={formData.loanExplanation}
                  onChange={e => updateForm('loanExplanation', e.target.value)}
                  rows={4}
                />
              </div>
            </div>
          </>
        )
      
      case 'verification':
        return (
          <>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={e => updateForm('firstName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={e => updateForm('lastName', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={e => updateForm('email', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={e => updateForm('phone', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={e => updateForm('address', e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={e => updateForm('city', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="province">Province</Label>
                  <Select
                    value={formData.province}
                    onValueChange={value => updateForm('province', value)}
                  >
                    <SelectTrigger id="province">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AB">Alberta</SelectItem>
                      <SelectItem value="BC">British Columbia</SelectItem>
                      <SelectItem value="MB">Manitoba</SelectItem>
                      <SelectItem value="NB">New Brunswick</SelectItem>
                      <SelectItem value="NL">Newfoundland and Labrador</SelectItem>
                      <SelectItem value="NS">Nova Scotia</SelectItem>
                      <SelectItem value="ON">Ontario</SelectItem>
                      <SelectItem value="PE">Prince Edward Island</SelectItem>
                      <SelectItem value="QC">Quebec</SelectItem>
                      <SelectItem value="SK">Saskatchewan</SelectItem>
                      <SelectItem value="NT">Northwest Territories</SelectItem>
                      <SelectItem value="NU">Nunavut</SelectItem>
                      <SelectItem value="YT">Yukon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={e => updateForm('postalCode', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </>
        )
      
      case 'review':
        return (
          <>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="font-medium mb-2">Loan Information</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-500">Purpose:</div>
                  <div>{formData.loanPurpose}</div>
                  <div className="text-gray-500">Amount:</div>
                  <div>${formData.loanAmount}</div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="font-medium mb-2">Personal Information</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-500">Name:</div>
                  <div>{formData.firstName} {formData.lastName}</div>
                  <div className="text-gray-500">Email:</div>
                  <div>{formData.email}</div>
                  <div className="text-gray-500">Phone:</div>
                  <div>{formData.phone}</div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 bg-gray-50">
                <h3 className="font-medium mb-2">Disbursement Method</h3>
                <div className="space-y-2">
                  <RadioGroup
                    value={formData.preferredDisbursement}
                    onValueChange={value => updateForm('preferredDisbursement', value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-blue-50">
                      <RadioGroupItem value="direct-deposit" id="direct-deposit" />
                      <Label htmlFor="direct-deposit" className="flex items-center gap-2 cursor-pointer">
                        <CircleDollarSign className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">Direct Deposit</div>
                          <div className="text-xs text-gray-500">Funds sent to your bank account</div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-blue-50">
                      <RadioGroupItem value="e-transfer" id="e-transfer" />
                      <Label htmlFor="e-transfer" className="flex items-center gap-2 cursor-pointer">
                        <Send className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">E-Transfer</div>
                          <div className="text-xs text-gray-500">Receive funds via email transfer</div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 bg-blue-50">
                <div className="text-sm">
                  By submitting this application, you confirm that all information provided is accurate and that you understand the loan terms. This loan is interest-free, and repayments will be scheduled based on your income.
                </div>
              </div>
            </div>
          </>
        )
      
      case 'complete':
        return (
          <div className="flex flex-col items-center py-6">
            <div className="bg-green-100 rounded-full p-3 mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
            <p className="text-center text-gray-600 mb-6">
              Your loan application has been successfully submitted. We'll review it and get back to you within 24 hours.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 w-full">
              <h4 className="font-medium mb-2">What happens next?</h4>
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-200 rounded-full text-blue-700 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>Our team will review your application (typically within 24 hours).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-200 rounded-full text-blue-700 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>You'll receive an email with the decision and next steps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-200 rounded-full text-blue-700 w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>If approved, funds will be disbursed via your chosen method.</span>
                </li>
              </ol>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }
  
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Apply for an Interest-Free Loan</CardTitle>
        <CardDescription>
          Prestar provides interest-free micro-loans to help Canadians with essential needs.
        </CardDescription>
        
        {/* Progress Steps */}
        {currentStep < steps.length - 1 && (
          <div className="flex justify-between mt-4">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${idx <= currentStep ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 text-gray-400'}`}>
                  {idx + 1}
                </div>
                <span className={`text-xs mt-1 ${idx <= currentStep ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardHeader>
      
      <form onSubmit={handleSubmit}>
        <CardContent>
          {renderFormStep()}
        </CardContent>
        
        {currentStep < steps.length - 1 && (
          <CardFooter className="flex justify-between">
            {currentStep > 0 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div>  
            )}
            <Button type="submit">
              {currentStep === steps.length - 2 ? 'Submit Application' : 'Continue'}
            </Button>
          </CardFooter>
        )}
        
        {currentStep === steps.length - 1 && (
          <CardFooter>
            <Button asChild className="w-full">
              <a href="/dashboard">Go to Dashboard</a>
            </Button>
          </CardFooter>
        )}
      </form>
    </Card>
  )
} 