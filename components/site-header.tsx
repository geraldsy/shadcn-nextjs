"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { CommandDemo } from "./command-demo"
import { ProfileInfo } from "./profile-info"

type SiteHeaderProps = {
  toggleHidden: () => void
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ toggleHidden }) => {
  const [isOpen, setisOpen] = useState()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <nav className="flex items-center w-full space-x-2 lg:w-1/2 ">
          <div className="flex space-x-2 w-[180px] ml-1">
            {/* hamburger menu */}
            <Button variant="ghost" size="sm" onClick={toggleHidden} className="sm:hidden">
              <Icons.menu className="w-5 h-5" />
              <span className="sr-only">Menu</span>
            </Button>
            {/* govph */}
            <Link href="/" className="flex items-center space-x-2 sm:px-2">
              <Icons.logo className="w-6 h-6" />
              <span className="inline-block font-bold">{siteConfig.name}</span>
            </Link>
          </div>
          <div className="hidden w-full w-xs sm:flex">
            {/* search */}
            <CommandDemo />
          </div>
        </nav>
        <div className="flex items-center justify-end flex-1 space-x-4">
          <nav className="flex items-center space-x-1">
            <div className="sm:hidden">
              <Button variant="ghost" size="sm">
                <Icons.search className="w-5 h-5" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <Link href={siteConfig.links.egov} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.Building2 className="w-5 h-5 " />
                <span className="sr-only">eGov</span>
              </div>
            </Link>
            <ThemeToggle />
            <ProfileInfo />
          </nav>
        </div>
      </div>
    </header>
  )
}
