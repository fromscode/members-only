import { NavLink } from "react-router"

import { Button } from "./ui/button"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBar() {
  return (
    <NavigationMenu className="py-2">
      <NavigationMenuList className="flex w-screen justify-center px-3">
        <NavigationMenuItem className="">
          <NavigationMenuLink
            asChild
            className="underlines cursor-pointer text-xl underline underline-offset-4"
          >
            <NavLink to="/">OnlyChat</NavLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem asChild className="ml-auto">
          <NavLink to="/join">
            <Button className="cursor-pointer rounded-2xl px-4">Join</Button>
          </NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
