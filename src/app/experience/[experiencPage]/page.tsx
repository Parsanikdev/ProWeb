"use client"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/app/Components/ShadcnComp/components/ui/alert";
import { Card } from "@/app/Components/ShadcnComp/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/Components/ShadcnComp/components/ui/carousel";
import { Separator } from "@/app/Components/ShadcnComp/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/app/Components/ShadcnComp/components/ui/tooltip";
import { Datastate } from "@/app/Context";
import IData, { Exprepience } from "@/app/types/Dattype";
import { CircleIcon, ExternalLinkIcon, Link2Icon, RocketIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useContext } from "react";
import { toast } from "sonner";


const Page = () => {
    const { data } = useContext(Datastate)
    const Mainpath = usePathname()
    let path = Mainpath.split("/")[2]

    const Thisdata = data?.Exprepience.find(s => ((s.id).includes(path)))

    return (

        <Fragment>
            <Separator className="mt-4" />
            <div className="container mx-auto mt-4">
                <h1 className="scroll-m-20 text-4xl border-b-2 font-extrabold tracking-tight lg:text-5xl mt-10 mb-4 w-10/12 mx-auto text-center md:text-left"
                    onClick={() => {

                        toasted(data?.Domain, Thisdata)
                    }}>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="flex items-center gap-1"><Link2Icon width={36} height={36} />{Thisdata?.title}</TooltipTrigger>
                            <TooltipContent>
                                <p className="font-thin tracking-normal" >click for copy this !</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                </h1>




                <Link href={Thisdata?.links[1].link || ""}>
                    <Image
                        className="w-10/12 mx-auto h-48 hover:h-[400px] hover:rounded-2xl hover:opacity-100 cursor-pointer transition-all duration-500 opacity-80 rounded-md object-cover"
                        width={800} height={400} src={Thisdata?.Image || ""} alt="none" />
                </Link>
                <div className="w-10/12 mx-auto md:flex md:justify-between">
                    <blockquote className="lg:w-5/12 mx-auto my-6 border-l-2  pl-6  text-sm">
                        {Thisdata?.rule} <span className="opacity-65 italic"> -  {Thisdata?.shortdescryiption}</span>
                    </blockquote>
                    <blockquote className="lg:w-5/12 mx-auto flex items-center justify-end gap-3 my-6 border-r-2  pr-6 text-sm">

                        {(Thisdata?.Date.to)?.toLocaleLowerCase() === "present" ?
                            <>
                                <CircleIcon width={16} height={16} className="animate-ping" /> coding !
                            </>
                            :
                            <>
                                Start  {Thisdata?.Date.from} - End {Thisdata?.Date.to}
                            </>
                        }




                    </blockquote>

                </div>




                <div className="w-10/12 mx-auto md:flex md:justify-around">

                    <Card className="py-3 md:w-5/12 w-full px-3 my-2">
                        <h4 className="scroll-m-20 text-sm font-normal tracking-tight">
                            Source on the
                            <a href={Thisdata?.links[0].link} target="_blank" rel="noopener noreferrer"> <ExternalLinkIcon className="inline" />{Thisdata?.links[0].title}</a>

                        </h4>
                    </Card>
                    <Card className="py-3 md:w-5/12 w-full px-3 my-2">
                        <h4 className="scroll-m-20 text-sm font-normal tracking-tight">
                            Launch on the
                            <a href={Thisdata?.links[1].link} target="_blank" rel="noopener noreferrer"> <ExternalLinkIcon className="inline" />{Thisdata?.links[1].title}</a>

                        </h4>
                    </Card>
                </div>
                <div className="container my-8 opacity-95">
                    <h2 className="scroll-m-20 border-b pb-2 container text-2xl font-semibold tracking-tight first:mt-0
                 lg:w-6/12 w-10/12 mx-auto 
                ">
                        {"technology I've used"}
                    </h2>
                </div>
                <div className="w-10/12 mx-auto md:flex md:justify-center gap-3">

                    {/* {Thisdata?.skills.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <Card className="px-12 py-1"> {item}</Card>
                            </Fragment>
                        )
                    })} */}


                    <Carousel className="lg:w-6/12   w-10/12 mx-auto">
                        <CarouselContent>

                            {Thisdata?.skills.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <CarouselItem className="basis-1/3">
                                            <Card className="text-center py-1">{item}</Card>
                                        </CarouselItem>
                                    </Fragment>
                                )
                            })}
                        </CarouselContent>
                        {(((Thisdata?.skills.length) || 0) > 3) &&

                            <>

                                <CarouselPrevious />
                                <CarouselNext />
                            </>

                        }


                    </Carousel>


                </div>


                <div className="w-10/12 mx-auto my-36">


                    <h2 className=" scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                     About {Thisdata?.title}
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        {Thisdata?.description}
                    </p>



                </div>




            </div>
        </Fragment>
    )
}

export default Page;


const toasted = (domain: string | undefined, data: Exprepience | undefined) => {

    const LINK = domain + "/experience/" + data?.id
    return (
        navigator.clipboard.writeText(LINK).then(() => {
            toast.success(data?.title + " Link Copied!")
        })
    )


}

