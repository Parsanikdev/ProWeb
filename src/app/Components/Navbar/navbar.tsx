"use client"


import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "../ShadcnComp/components/ui/navigation-menu"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ShadcnComp/components/ui/dropdown-menu"



import { MoonIcon, SunIcon, CursorArrowIcon, CircleIcon, OpenInNewWindowIcon, DotFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../ShadcnComp/components/ui/button";
import { useTheme } from "next-themes";
import { useContext } from "react";
import { Datastate } from "@/app/Context";
import Sheetable from "./sheetable";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ShadcnComp/components/ui/accordion";
import { usePathname } from "next/navigation";
const Navbar = () => {
    const { data } = useContext(Datastate)
    const { setTheme } = useTheme()
    const path = usePathname()
    return (
        <div className="group mt-6 mx-auto container flex justify-between">

            <h3 className="bg-red-360  scroll-m-20 text-2xl font-semibold tracking-tight group-hover:animate-pulse justify-around items-center md:w-auto w-full md:inline flex


            ">
                {data?.personalDetail.family}


                <Sheetable />

            </h3>

            <NavigationMenu className="md:block hidden">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="../../../../../" legacyBehavior passHref>
                            <NavigationMenuLink active={path == "/" ? true : false} className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="../../../../about" legacyBehavior passHref>
                            <NavigationMenuLink active={path == "/about" ? true : false} className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>


                        </Link>
                    </NavigationMenuItem>



                    <NavigationMenuItem >
                        <NavigationMenuTrigger className={path == "/stacks" ? "bg-accent/50" : ""}>Stacks</NavigationMenuTrigger>
                        <NavigationMenuContent className="flex justify-center w-[240px] md:w-[360px]  lg:w-[400px]">
                            <Accordion type="single" className=" w-[200px] md:w-[300px]  lg:w-[360px]">


                                {data?.side.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <AccordionItem value={`item-${index + 1}`}>
                                                <AccordionTrigger>{item.sideName}</AccordionTrigger>
                                                <AccordionContent>

                                                    {item.skills.map((item, index) => {
                                                        return (
                                                            <li key={index} className="flex items-center gap-2 my-2" ><DotFilledIcon />{item}</li>
                                                        )
                                                    })}
                                                </AccordionContent>


                                            </AccordionItem>
                                        </div>
                                    )
                                })}

                            </Accordion>
                        </NavigationMenuContent>
                    </NavigationMenuItem>




                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={path == "/experience" ? "bg-accent/50" : ""}>Experience</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            {data?.Exprepience.map((item, index) => {
                                return (
                                    <ul key={index} className="grid w-[240px]  gap-3 p-4 md:w-[360px] md:grid-cols-2 lg:w-[400px] ">
                                        <Link href={"../../../../../experience/" + item.id} className="flex items-center gap-2">
                                            <OpenInNewWindowIcon />  {item.title}
                                        </Link>
                                    </ul>
                                )
                            })}


                        </NavigationMenuContent>
                    </NavigationMenuItem>



                    <NavigationMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("system")}>
                                    System
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>



        </div>

    )
}

export default Navbar;