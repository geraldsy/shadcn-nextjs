/* eslint-disable tailwindcss/classnames-order */
import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface SideNavProps {
  items?: NavItem[]
}

interface SideNavItem {
  title: string
  href: string
  children?: SideNavItem[]
}

const DynamicIcon = ({ title }: { title: string }) => {
  const IconComponent = Icons[title]
  if (IconComponent) {
    return <IconComponent className="w-5 h-5" />
  }
  return null // Or any other fallback behavior
}

export function SideNav({ items }: SideNavProps) {
  return (
    <div className="w-[180px] h-screen gap-6 border-r md:gap-10">
      {items?.length ? (
        <nav className="flex flex-col w-full gap-2 p-2 ">
          {items?.map((item) => (
            <div key={item.title}>
              <Link
                href={item.href}
                className={buttonVariants({
                  variant: "ghost",
                  className: "w-full ",
                })}
              >
                <div className="flex justify-start w-full">
                  <span className="mr-2">
                    <DynamicIcon title={item.title} />
                  </span>
                  <span>{item.title}</span>
                </div>
              </Link>
              {item.children && item.children.length > 0 && (
                <div>
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href}
                      className={buttonVariants({
                        variant: "ghost",
                        className: "w-full ",
                      })}
                    >
                      <div className="flex justify-between w-full">
                        <div className="flex">
                          <span className="mr-7">
                            <DynamicIcon title={child.title} />
                          </span>
                          <span>{child.title}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      ) : null}
    </div>
  )
}
