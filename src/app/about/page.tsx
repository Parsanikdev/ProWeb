"use client"

import { Fragment, useContext, useEffect, useState } from "react";
import { Datastate } from "../Context";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../Components/ShadcnComp/components/ui/card";
import { Separator } from "../Components/ShadcnComp/components/ui/separator";
import Image from "next/image";
import extractDomain from "../utils";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../Components/ShadcnComp/components/ui/tooltip";
import { ChatBubbleIcon, DrawingPinFilledIcon, EnvelopeClosedIcon, FileTextIcon, PersonIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import IData from "../types/Dattype";
import { Dialog } from "../Components/AlertDialog/alertDailog";
import Linkisaboutpage from "./loadingLink";
import { Button } from "../Components/ShadcnComp/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../Components/ShadcnComp/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/ShadcnComp/components/ui/tabs";


const About = () => {
    const { data } = useContext(Datastate)




    const name = data?.personalDetail.name
    return (
        <div className="container mt-[100px] mx-auto flex items-center flex-wrap justify-around
       
        ">


            <Card className="w-10/12   flex justify-center items-end flex-wrap ">
                <h2 className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight 
                float-left mb-2 w-11/12 mt-6
                ">

                    <span className="text-xl  font-thin">
                        {"I'm "}
                    </span>

                    {data?.personalDetail.name} {data?.personalDetail.family}
                </h2>

                <div className="w-10/12 mb-2 float-left ">
                    <div className="space-y-1 mb-2 ">
                        <h4 className="text-sm font-medium leading-none text-center opacity-85">
                            {data?.personalDetail.description}
                        </h4>

                    </div>
                    <Separator className="my-4 opacity-50" />
                    <div className="flex h-5 items-center justify-center space-x-4 text-sm">
                        {data?.side.map((item, index) => {
                            return (

                                <Fragment key={index}>
                                    <Link href={"./" + item.sideName.replace(/[\s-]/g, "")}>
                                        <div>{item.sideName}</div>

                                    </Link>

                                    {index !== data.side.length - 1 && <Separator orientation="vertical" />}

                                </Fragment>

                            )
                        })}

                    </div>
                </div>

            </Card>
            <div className="w-full py-6 float-left ">

                <Linkisaboutpage />
            </div>



            <div className="w-10/12 mt-8">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl cursor-pointer font-semibold tracking-tight first:mt-0 hover:animate-pulse active:text-red-800 "
                    id="summary"
                    onClick={() => {

                        toasted(data, "#summary")
                    }}
                >
                    # summary
                </h2>
                <h4 className="scroll-m-20 text-xl font-medium tracking-tight mt-8">

                    I was born in {data?.personalDetail.birthDay} and I live in {data?.personalDetail.location}

                </h4>
                <p className="leading-8 [&:not(:first-child)]:mt-6 opacity-65">
                    {data?.personalDetail.longdescription}
                </p>


            </div>



            <div className="w-10/12 mt-12 float-left">
                <h2 className="scroll-m-20 pb-2 text-3xl cursor-pointer font-semibold tracking-tight first:mt-0 hover:animate-pulse active:text-red-800 "
                    id="Education"
                    onClick={() => {

                        toasted(data, "#Education")
                    }}
                >
                    # Education
                </h2>

                <Tabs defaultValue={data?.personalDetail.education[0].title} className="mx-auto">
                    <TabsList className="w-full">
                        {data?.personalDetail.education.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <TabsTrigger value={item.title} className="gap-1"><PersonIcon />
                                        {item.title}
                                    </TabsTrigger>
                                </Fragment>
                            )
                        })}


                    </TabsList>
                    {data?.personalDetail.education.map((item, index) => {
                        return (
                            <Fragment key={index} >
                                <TabsContent value={item.title} className="w-10/12 mx-auto" >

                                    <div className="float-left mt-12 w-full">
                                        <h2 className="scroll-m-20  pb-2 text-3xl font-semibold inline tracking-tight ">
                                            {item.title}
                                        </h2>
                                        <span className="italic font-thin"> - {item.degree}</span>
                                    </div>

                                    <div className="w-full mt-12 float-left">
                                        <h4 className="scroll-m-20 text-xl opacity-85 font-thin tracking-tight">
                                            I studied at <span className="font-extrabold">{item.title}</span> from <span className="font-extrabold">{item.from}</span> to <span className="font-extrabold">{item.to}</span>
                                        </h4>
                                    </div>

                                </TabsContent>
                            </Fragment>
                        )
                    })}

                </Tabs>

                <div className="h-96">

                </div>
            </div>


        </div>
    )
}
export default About;
const toasted = (data: IData | undefined, ID: string) => {


    if (ID[0] === "#") {
        return (
            navigator.clipboard.writeText(data?.Domain + "/about/" + ID).then(() => {
                toast.success(ID.replace("#", "") + " Link Copied!")
            })
        )
    } else {
        return (
            navigator.clipboard.writeText(ID).then(() => {
                toast.success(ID.replace("#", "") + " Link Copied!")
            })
        )
    }

}




