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
import { Fragment, useContext, useState } from "react";
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
                    <ImagewithLoader src={Thisdata?.Image} alt="none" />
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
                            {Thisdata?.links[0].link &&

                                <Link href={Thisdata.links[0].link} target="_blank" > <ExternalLinkIcon className="inline" />{Thisdata?.links[0].title}</Link>

                            }

                        </h4>
                    </Card>
                    <Card className="py-3 md:w-5/12 w-full px-3 my-2">
                        <h4 className="scroll-m-20 text-sm font-normal tracking-tight">
                            Launch on the
                            {Thisdata?.links[1].link &&

                                <Link href={Thisdata.links[1].link} target="_blank"> <ExternalLinkIcon className="inline" />{Thisdata?.links[1].title}</Link>

                            }
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


                    <Carousel className="lg:w-6/12 w-10/12 mx-auto">
                        <CarouselContent className={(((Thisdata?.skills.length) || 0) <= 3) ? "md:flex md:justify-center" : ""}>

                            {Thisdata?.skills.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        <CarouselItem className="md:basis-1/4 basis-1/2">
                                            <Card className="text-center py-1">{item}</Card>
                                        </CarouselItem>
                                    </Fragment>
                                )
                            })}
                        </CarouselContent>


                        <CarouselPrevious className="" />
                        <CarouselNext />





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

const ImagewithLoader = ({ src, alt }: { src: string | undefined, alt: string | undefined }) => {
    const [loading, setLoading] = useState(true);

    return (
        <Fragment>
            {loading && (
                <div className="bg-gray-50 animate-pulse w-10/12 ml-[8%] h-48 cursor-not-allowed rounded-md"></div>
            )}

            <div className="relative w-10/12 mx-auto h-48 hover:h-[400px] transition-all duration-500 opacity-60
                hover:opacity-100
            "
                style={{
                    position: loading ? "absolute" : "relative",
                    opacity: loading ? "0" : "1",

                }}
            >
                <Image
                    className="w-full h-full object-cover rounded-md  "
                    src={src || ""}
                    alt={alt || ""}
                    layout="fill"
                    onLoad={() => {

                        console.log("comlete")
                        setLoading(false)
                    }}

                />
            </div>
        </Fragment>


    );
}