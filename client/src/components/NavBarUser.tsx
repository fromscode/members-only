import { NavLink } from "react-router"

import { Button } from "./ui/button"

import { Plus } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBaruser() {
  return (
    <header className="flex w-full items-center justify-between px-5 py-2">
      <NavLink
        to="/"
        className="cursor-pointer text-xl underline underline-offset-4 hover:no-underline"
      >
        OnlyChat
      </NavLink>

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4"></NavigationMenuList>
      </NavigationMenu>

      <NavLink to="/join">
        <Button className="flex cursor-pointer rounded-2xl px-3 py-4 pr-4">
          <Plus className="" />
          New Post
        </Button>
      </NavLink>
    </header>
  )
}
