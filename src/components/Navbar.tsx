"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({className}: {className? : string}) => {
    const [active,setActive] = useState<string | null>(null)
  return (
    <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
     <Menu setActive={setActive}>
         <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
          {/* text */}
          </MenuItem>
         </Link>

         <MenuItem setActive={setActive} active={active} item="our courses">
         <div className="flex flex-col space-y-4 text-sm">

         <HoveredLink href="/web-dev">All courses</HoveredLink>
         <HoveredLink href="/web-dev">Web Development</HoveredLink>
         <HoveredLink href="/web-dev">java Development</HoveredLink>
         <HoveredLink href="/web-dev">Backend Development</HoveredLink>

         </div>
        
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact us">
               
          </MenuItem>
        </Menu>    
    </div>
  )
}

export default Navbar