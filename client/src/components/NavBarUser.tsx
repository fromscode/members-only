import { NavLink } from "react-router"

import { Button } from "./ui/button"

import { Plus } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBaruser() {
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
    </header>
  )
}
