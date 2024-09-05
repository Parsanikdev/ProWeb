import Image from "next/image";
import Link from "next/link";
import { Fragment, useContext, useState } from "react";
import { Datastate } from "../Context";
import extractDomain from "../utils";
import { Separator } from "../Components/ShadcnComp/components/ui/separator";


import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../Components/ShadcnComp/components/ui/tooltip";
import { ChatBubbleIcon, EnvelopeClosedIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Dialog } from "../Components/AlertDialog/alertDailog";









const Linkisaboutpage = () => {
    const { data } = useContext(Datastate)
    const [loading, setloading] = useState<boolean[]>(Array(
        data?.personalDetail.links.length
    ).fill(true));






    return (
        <div className="flex h-5 items-center justify-center space-x-4 text-sm">

            {data?.personalDetail.links.map((item, index) => {



                return (

                    <Fragment key={index}>



                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>

                                    <Link href={item.link}>

                                        <Imagewithloading href={"https://icon.horse/icon/" + extractDomain(item.link)}
                                            alt={item.title} height={24} width={24}
                                        />


                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.title}</p>
                                    <div>{"https://icon.horse/icon/" + extractDomain(item.link)}</div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>


                        {index !== (data.personalDetail.links.length) - 1 && <Separator orientation="vertical" />}


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
    )
}


export default Linkisaboutpage;




interface IImage {
    href: string,
    alt: string,
    width: number,
    height: number
}
const Imagewithloading = (prop: IImage) => {

    const { alt, height, href, width } = prop


    const [loading, setloading] = useState(true)
    return (
        <>

            <Image hidden={loading} onLoad={() => {
                console.log(alt + " loaded")
                setloading(false)

            }} src={href} alt={alt} width={width} height={height} />

            {loading && <ReloadIcon className="animate-spin" />}
        </>



    )
}