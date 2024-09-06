"use client"


import { DotFilledIcon, HamburgerMenuIcon, MoonIcon, OpenInNewWindowIcon, SunIcon } from "@radix-ui/react-icons";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "../ShadcnComp/components/ui/sheet"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,

    DropdownMenuTrigger,
} from "../ShadcnComp/components/ui/dropdown-menu"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ShadcnComp/components/ui/accordion";

import { Button } from "../ShadcnComp/components/ui/button";
import { useTheme } from "next-themes";
import { useContext } from "react";
import { Datastate } from "@/app/Context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ShadcnComp/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sheetable = () => {


    const { data } = useContext(Datastate)
    const { setTheme } = useTheme()
    const path = usePathname()

    return (

        <div className="md:hidden block">
            <Sheet >
                <SheetTrigger>
                    <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]  scale-100 " />
                    {/* open */}
                </SheetTrigger>
                <SheetContent >

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

                    <SheetHeader className="mt-6">

                        <Link href="/" legacyBehavior passHref  >
                            <Button variant={path == "/about" ? "default" : "secondary"}>
                                Home

                            </Button>
                        </Link>

                        <Link href="/about" legacyBehavior passHref >
                            <Button variant={path == "/about" ? "secondary" : "default"}>
                                About
                            </Button>
                        </Link>

                        <Tabs defaultValue="stack" className="w-full mt-6">
                            <TabsList>
                                <TabsTrigger value="stack">stack</TabsTrigger>
                                <TabsTrigger value="experience">experience</TabsTrigger>
                            </TabsList>
                            <TabsContent value="experience">
                                {data?.Exprepience.map((item, index) => {
                                    return (
                                        <ul key={index} className="grid w-[240px]  gap-3 p-4 md:w-[360px] md:grid-cols-2 lg:w-[400px] ">
                                            <Link href={"../../../../../../experience/" + (item.id).replace(" ", "")} className="flex items-center gap-2">
                                                <OpenInNewWindowIcon />  {item.title}
                                            </Link>
                                        </ul>
                                    )
                                })}
                            </TabsContent>
                            <TabsContent value="stack">
                                <Accordion type="single" collapsible>
                                    {data?.side.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <AccordionItem value={`item-${index + 1}`}>
                                                    <AccordionTrigger >
                                                        {item.sideName}
                                                    </AccordionTrigger>
                                                    <AccordionContent>

                                                        {item.skills.map((item, index) => {
                                                            return (
                                                                <div key={index}>
                                                                    <li key={index} className="flex items-center gap-2 my-2" ><DotFilledIcon />{item}</li>
                                                                </div>
                                                            )
                                                        })}
                                                    </AccordionContent>


                                                </AccordionItem>
                                            </div>
                                        )
                                    })}
                                </Accordion>

                            </TabsContent>
                        </Tabs>



                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}


export default Sheetable;