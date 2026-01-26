"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "./theme-toggle"
import { Separator } from "./ui/separator"


export function Header() {

  return (

    <header className="px-20 border-b fixed w-full z-100 bg-gray-100 dark:bg-zinc-900">
      
      <div className="flex items-center justify-between py-6">
        <Link href="#presentation">
          <h1 className="text-2xl font-bold">
            Letícia<span className="text-purple-600"> &lt;/&gt; </span>
          </h1>
        </Link>
        
        
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#about">Sobre</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
        
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#formation">Formação</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#projects">Projetos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="#contact">Contato</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
        
            <ThemeToggle />
          </NavigationMenuList>
        
        </NavigationMenu>
      </div>

      <Separator className="bg-muted-foreground/30 "/>
    </header>
    
  )
}
