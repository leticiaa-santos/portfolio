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


export function Header() {

  return (

    <header className="flex items-center justify-between py-6 px-20">
      
      <h1 className="text-2xl font-bold">
        Letícia<span className="text-purple-600"> &lt;/&gt; </span>
      </h1>
      
      <NavigationMenu>

        <NavigationMenuList className="flex-wrap gap-6">

          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="#about">Sobre</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="#experience">Experiência</Link>
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
    </header>
    
  )
}
