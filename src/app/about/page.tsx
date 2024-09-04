"use client"

import { useContext, useEffect, useState } from "react";
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
import { ReloadIcon } from "@radix-ui/react-icons";


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

                {/* <h1 className="scroll-m-20 text-4xl font-extrabold 
                 items-center
               py-6
                h-full
                 tracking-tight lg:text-5xl
                
                 ">
                    
                </h1> */}
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

                                <>
                                    <div>{item.sideName}</div>
                                    {index !== data.side.length - 1 && <Separator orientation="vertical" />}

                                </>

                            )
                        })}

                    </div>
                </div>

            </Card>
            <div className="w-full py-6 float-left ">

                <div className="flex h-5 items-center justify-center space-x-4 text-sm">
                    {data?.personalDetail.links.map((item, index) => {



                        return (

                            <>


                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link href={item.link}>
                                                <Image hidden={loading} onLoad={() => setloading(false)} src={"https://icon.horse/icon/" + extractDomain(item.link)} alt={item.title} width={24} height={24} />
                                                {loading && <ReloadIcon className="animate-spin" />}
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{item.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>






                                {index !== data.personalDetail.links.length - 1 && <Separator orientation="vertical" />}

                            </>

                        )
                    })}

                </div>
            </div>




        </div>
    )
}

export default About;