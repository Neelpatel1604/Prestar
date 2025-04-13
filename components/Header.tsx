import Link from 'next/link'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import Image from 'next/image'

export function Header() {
  return (
    <header className="border-b border-border bg-white py-3">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          <Image src="/OriginalLogo.png" alt="Prestar Logo" width={110} height={52} />
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Loans</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[200px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/loans/apply" className="block p-2 hover:bg-blue-50 rounded-md">
                        Apply for a Loan
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/loans/status" className="block p-2 hover:bg-blue-50 rounded-md">
                        Check Loan Status
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Education</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[250px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/education/resources" className="block p-2 hover:bg-blue-50 rounded-md">
                        Financial Resources
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/education/tools" className="block p-2 hover:bg-blue-50 rounded-md">
                        Budgeting Tools
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/education/articles" className="block p-2 hover:bg-blue-50 rounded-md">
                        Articles
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 