import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { BookOpen, BarChart4, CheckCircle, Play, FileText, Download, Search, Clock } from 'lucide-react'
import Link from 'next/link'

// Mock data for education resources
const mockResources = {
  modules: [
    { 
      id: 1, 
      title: 'Budgeting Basics', 
      description: 'Learn how to create and manage a personal budget', 
      level: 'Beginner',
      duration: '15 min',
      topics: ['Budgeting', 'Saving'],
      progress: 100
    },
    { 
      id: 2, 
      title: 'Emergency Fund Essentials', 
      description: 'How to build and maintain an emergency fund', 
      level: 'Beginner',
      duration: '12 min',
      topics: ['Saving', 'Planning'],
      progress: 60
    },
    { 
      id: 3, 
      title: 'Understanding Credit', 
      description: 'Learn about credit scores, reports, and responsible use', 
      level: 'Intermediate',
      duration: '20 min',
      topics: ['Credit', 'Debt'],
      progress: 0
    },
    { 
      id: 4, 
      title: 'Debt Management Strategies', 
      description: 'Effective techniques to pay down and manage debt', 
      level: 'Intermediate',
      duration: '18 min',
      topics: ['Debt', 'Planning'],
      progress: 0
    }
  ],
  articles: [
    {
      id: 1,
      title: 'How to Save on Groceries Without Sacrificing Nutrition',
      category: 'Saving',
      readTime: '5 min',
      date: 'Nov 15, 2024'
    },
    {
      id: 2,
      title: 'Understanding Government Benefits and Programs in Canada',
      category: 'Resources',
      readTime: '7 min',
      date: 'Nov 8, 2024'
    },
    {
      id: 3,
      title: 'Building Credit Without Going Into Debt',
      category: 'Credit',
      readTime: '6 min',
      date: 'Oct 30, 2024'
    },
    {
      id: 4,
      title: '10 Simple Ways to Reduce Monthly Expenses',
      category: 'Budgeting',
      readTime: '4 min',
      date: 'Oct 22, 2024'
    }
  ],
  tools: [
    {
      id: 1,
      title: 'Budget Calculator',
      description: 'Create a personalized budget based on your income and expenses',
      icon: 'BarChart4'
    },
    {
      id: 2,
      title: 'Debt Repayment Planner',
      description: 'Plan how to pay off debts with different strategies',
      icon: 'TrendingDown'
    },
    {
      id: 3,
      title: 'Savings Goal Calculator',
      description: 'Set savings goals and track your progress',
      icon: 'PiggyBank'
    }
  ]
}

export function FinancialResourceHub() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Financial Education Hub</h1>
        <p className="text-gray-600">Access free resources to improve your financial literacy</p>
      </div>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Search all resources..." 
            className="pl-10"
          />
        </div>
        <Button variant="outline">Filter</Button>
      </div>
      
      <Tabs defaultValue="modules" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="modules">Learning Modules</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="tools">Financial Tools</TabsTrigger>
        </TabsList>
        
        <TabsContent value="modules">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockResources.modules.map(module => (
              <Card key={module.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{module.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Progress</span>
                      <span>{module.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {module.topics.map(topic => (
                      <span 
                        key={topic} 
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t bg-gray-50">
                  <Button className="w-full" asChild>
                    <Link href={`/education/module/${module.id}`}>
                      <span className="flex items-center">
                        {module.progress > 0 && module.progress < 100 ? (
                          <>Continue Learning<Play className="ml-2 h-4 w-4" /></>
                        ) : module.progress === 100 ? (
                          <>Review Module<CheckCircle className="ml-2 h-4 w-4" /></>
                        ) : (
                          <>Start Learning<Play className="ml-2 h-4 w-4" /></>
                        )}
                      </span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Button variant="outline">View All Modules</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="articles">
          <div className="space-y-4">
            {mockResources.articles.map(article => (
              <Card key={article.id}>
                <div className="p-4 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">
                      <Link href={`/education/article/${article.id}`} className="hover:text-blue-600">
                        {article.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                        {article.category}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime} read</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/education/article/${article.id}`}>Read</Link>
                  </Button>
                </div>
              </Card>
            ))}
            
            <div className="mt-4 text-center">
              <Button variant="outline">View All Articles</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tools">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockResources.tools.map(tool => (
              <Card key={tool.id} className="hover:border-blue-300 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <BarChart4 className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{tool.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/education/tools/${tool.id}`}>Open Tool</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Free Financial Resources</CardTitle>
                <CardDescription>Download helpful templates and guides</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="border rounded-lg p-3 hover:bg-blue-50 transition-colors">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-100">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Monthly Budget Template</div>
                        <div className="text-xs text-gray-500">Excel/Google Sheets</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-3 hover:bg-blue-50 transition-colors">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-100">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Debt Snowball Worksheet</div>
                        <div className="text-xs text-gray-500">PDF</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-3 hover:bg-blue-50 transition-colors">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-100">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium">Emergency Fund Guide</div>
                        <div className="text-xs text-gray-500">PDF</div>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 