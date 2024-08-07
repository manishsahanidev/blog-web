"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "./icons"
import { ModeToggle } from "./ui/mode-toggle"

const posts: { title: string; href: string; description: string }[] = [
    {
        title: "React",
        href: "/blog/react",
        description:
            "Learn React.js and Next.js with our tutorials, guides, and examples.",
    },
    {
        title: "Javascript",
        href: "/blog/javascript",
        description:
            "Learn Javascript with our tutorials, guides, and examples.",
    },
    {
        title: "CSS",
        href: "/blog/css",
        description:
            "Learn CSS with our tutorials, guides, and examples.",
    },
    {
        title: "Java",
        href: "/blog/java",
        description:
            "Learn Java with our tutorials, guides, and examples.",
    },
    {
        title: "Spring Boot",
        href: "/blog/springboot",
        description:
            "Learn SpringBoot with our tutorials, guides, and examples.",
    },
    {
        title: "NodeJS",
        href: "/blog/nodejs",
        description:
            "Learn Node.js and Express.js with our tutorials, guides, and examples.",
    },
]

export function MainNav({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-col items-start md:flex-row md:items-center md:justify-between pt-10 z-50", className)}>
            <Link href={"/"}>
                <div className="flex items-center justify-between w-[170px]">
                    {/* Logo Icon */}
                    <Icons.logo className="h-7 w-7" />
                    <p>Genius Developer</p>
                </div>
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                {posts.map((post) => (
                                    <ListItem
                                        key={post.title}
                                        title={post.title}
                                        href={post.href}
                                    >
                                        {post.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>


                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center justify-between w-20">
                <ModeToggle />
                <Link href={"/rss"}>
                    <Icons.rss className="h-6 w-6" />
                </Link>
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
