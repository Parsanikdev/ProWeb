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
import { ChatBubbleIcon, EnvelopeClosedIcon, ReloadIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";
import IData from "../types/Dattype";
import { Dialog } from "../Components/AlertDialog/alertDailog";


const About = () => {
    const { data } = useContext(Datastate)
    const [loading, setloading] = useState(true);





    const name = data?.personalDetail.name
    return (
        <div className="container mt-[100px] mx-auto flex items-center flex-wrap justify-around
       
        ">


            <Card className="w-10/12   flex justify-center items-end flex-wrap ">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 py-6 float-left 
                mb-4
                ">
                    I am {data?.personalDetail.name} {data?.personalDetail.family}
                </h2>

                <div className="w-10/12 py-6 float-left ">
                    <div className="space-y-1">
                        <h4 className="text-sm font-medium leading-none text-center">About me</h4>
                        <p className="text-sm text-muted-foreground text-center ">
                            {data?.personalDetail.description}
                        </p>
                    </div>
                    <Separator className="my-4" />
                    <div className="flex h-5 items-center justify-center space-x-4 text-sm">
                        {data?.side.map((item, index) => {
                            return (

                                <div key={index}>
                                    <Link href={"./" + item.sideName.replace(/[\s-]/g, "")}>
                                        <div>{item.sideName}</div></Link>
                                    {index !== data.side.length - 1 && <Separator orientation="vertical" />}

                                </div>

                            )
                        })}

                    </div>
                </div>

            </Card>
            <div className="w-full py-6 float-left ">

                <div className="flex h-5 items-center justify-center space-x-4 text-sm">

                    {data?.personalDetail.links.map((item, index) => {



                        return (

                            <Fragment key={index}>



                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>

                                            <Link href={item.link}>

                                                <Image src={"https://icon.horse/icon/" + extractDomain(item.link)} alt={item.title} width={24} height={24} />
                                                {/* {loading && <ReloadIcon className="animate-spin" />} */}
                                                {/* {loading ? "roading" : "show"} */}

                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{item.title}</p>
                                            <div>{"https://icon.horse/icon/" + extractDomain(item.link)}</div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>


                                {index !== (data.personalDetail.links.length )-1 && <Separator orientation="vertical" />}


                            </Fragment>
                        )
                    })}

                    <Separator orientation="vertical" />
                    <TooltipProvider>
                        <Tooltip>
                            <div data-state="closed" className="flex items-center">



                                <Dialog title="email" data={data?.personalDetail.email + ""}>
                                    <EnvelopeClosedIcon />
                                </Dialog>

                            </div>
                            <TooltipContent>
                                <p>{data?.personalDetail.email}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Separator orientation="vertical" />
                    <TooltipProvider>
                        <Tooltip>
                            <div data-state="closed" className="flex items-center">


                                <Dialog title="Email" data={data?.personalDetail.Phone + ""}>
                                    <ChatBubbleIcon />
                                </Dialog>
                            </div>
                            <TooltipContent>
                                {data?.personalDetail.Phone}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>


                </div>
            </div>



            <div className="w-10/12 mt-8">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl cursor-pointer font-semibold tracking-tight first:mt-0 hover:animate-pulse active:text-red-800 " id="about"
                    onClick={() => {

                        toasted(data, "#about")
                    }}
                >
                    #About me
                </h2>
                <p className="leading-8 [&:not(:first-child)]:mt-6 opacity-65">
                    {data?.personalDetail.longdescription}
                </p>
            </div>

            <div className="w-10/12 mt-12 float-left">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl cursor-pointer font-semibold tracking-tight first:mt-0 hover:animate-pulse active:text-red-800 " id="about"
                    onClick={() => {
                        navigator.clipboard.writeText(data?.Domain + "/about/#about").then(() => {
                            toast.success("Link Copied!")
                        })
                    }}
                >
                    #About me
                </h2>
                <p className="leading-8 [&:not(:first-child)]:mt-6 opacity-65">
                    {data?.personalDetail.longdescription}
                </p>
            </div>


        </div>
    )
}

export default About;





const toasted = (data: IData | undefined, ID: string) => {


    if (ID[0] === "#") {
        return (
            navigator.clipboard.writeText(data?.Domain + "/about/#" + ID).then(() => {
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