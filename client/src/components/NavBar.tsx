import { NavLink } from "react-router"

import { Button } from "./ui/button"

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBar() {
  return (
    <header className="flex w-full items-center justify-between px-5 gap-3 mt-3.5">
      <NavLink
        to="/"
        className="cursor-pointer text-sm py-1 underline underline-offset-4 rounded-lg hover:no-underline"
      >
        OnlyChat
      </NavLink>

      <NavLink
        to="/dashboard"
        className="cursor-pointer text-sm hover:bg-input py-1 rounded-lg px-1"
      >
        Dashboard
      </NavLink>

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4"></NavigationMenuList>
      </NavigationMenu>

      <NavLink to="/join">
        <Button className="flex cursor-pointer rounded-2xl px-3 py-4 ">
          Join
        </Button>
      </NavLink>
    </header>
  )
}
