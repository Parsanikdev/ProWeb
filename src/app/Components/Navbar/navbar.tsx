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
    DropdownMenuTrigger,
} from "../ShadcnComp/components/ui/dropdown-menu"



import { MoonIcon, SunIcon, CursorArrowIcon, CircleIcon, OpenInNewWindowIcon, DotFilledIcon } from "@radix-ui/react-icons";
import { Button } from "../ShadcnComp/components/ui/button";
import { useTheme } from "next-themes";
import { Fragment, useContext } from "react";
import { Datastate } from "@/app/Context";
import Sheetable from "./sheetable";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ShadcnComp/components/ui/accordion";
import { usePathname } from "next/navigation";
import { Separator } from "../ShadcnComp/components/ui/separator";
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
                        <NavigationMenuContent className="flex justify-center md:w-[420px]">
                            <Accordion type="multiple" className=" w-[420px]">


                                {data?.side.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <AccordionItem value={`item-${index + 1}`} className="w-[380px] mx-auto">
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
                        <NavigationMenuContent className="w-[420px]">
                            {data?.Exprepience.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <ul className="w-[420px] px-[20px] py-3">
                                            <Link href={"../../../../../experience/" + item.id} className="flex items-center gap-2">
                                                <OpenInNewWindowIcon />  {item.title}
                                            </Link>

                                        </ul>
                                        <Separator orientation="horizontal" />
                                    </Fragment>
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