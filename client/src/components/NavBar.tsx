import { NavLink } from "react-router"

import { Button } from "./ui/button"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function NavBar() {
  // return (
  //   <NavigationMenu className="py-2 max-w-full w-full">
  //     <NavigationMenuList className="flex w-full justify-between px-3">
  //       <NavigationMenuItem className="">
  //         <NavigationMenuLink
  //           asChild
  //           className="underlines cursor-pointer text-xl underline underline-offset-4"
  //         >
  //           <NavLink to="/">OnlyChat</NavLink>
  //         </NavigationMenuLink>
  //       </NavigationMenuItem>

  //       <NavigationMenuItem asChild className="">
  //         <NavLink to="/join">
  //           <Button className="cursor-pointer rounded-2xl px-4">Join</Button>
  //         </NavLink>
  //       </NavigationMenuItem>
  //     </NavigationMenuList>
  //   </NavigationMenu>
  // )

  return (
    <header className="flex w-full items-center justify-between px-5 py-2">

      <NavLink to="/" className="cursor-pointer text-xl underline underline-offset-4">
        OnlyChat
      </NavLink>

      <NavigationMenu>
        <NavigationMenuList className="flex space-x-4">
        </NavigationMenuList>
      </NavigationMenu>

      <NavLink to="/join">
        <Button className="cursor-pointer rounded-2xl px-4">Join</Button>
      </NavLink>
      
    </header>
  )
}
