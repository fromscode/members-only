import { NavLink } from "react-router"

import { Button } from "./ui/button"

import { Plus, User } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBaruser({ role }: { role: string }) {
  return (
    <header className="mt-3.5 flex w-full items-center justify-between gap-3 px-5">
      <NavLink
        to="/"
        className="cursor-pointer rounded-lg py-1 text-sm underline underline-offset-4 hover:no-underline"
      >
        OnlyChat
      </NavLink>

      <NavLink
        to="/dashboard"
        className="cursor-pointer rounded-lg px-1 py-1 text-sm hover:bg-input"
      >
        Dashboard
      </NavLink>

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4"></NavigationMenuList>
      </NavigationMenu>

      <NavLink to="/post">
        <Button className="flex cursor-pointer rounded-2xl px-3 py-4 pr-4">
          <Plus className="" />
          New Post
        </Button>
      </NavLink>

      <NavLink to="/" className="h-full cursor-default">
        {" "}
        {/* TO-DO link upgrade  */}
        {role == "ADMIN" ? (
          <div className="flex h-full">
            <div className="flex h-full items-center justify-stretch gap-5 rounded-l-full border-2 border-primary bg-accent px-3 text-xs">
              <div>{role}</div>
            </div>
          </div>
        ) : (
          <div className="flex items-stretch">
            <div className="flex h-full items-center justify-stretch gap-5 rounded-l-full border-2 border-primary bg-accent px-3 text-xs">
              {role}
            </div>
            <Button className="flex cursor-pointer gap-5 rounded-r-full border-2 border-primary bg-primary px-3 py-4 hover:text-background">
              Upgrade
            </Button>
          </div>
        )}
      </NavLink>
    </header>
  )
}
