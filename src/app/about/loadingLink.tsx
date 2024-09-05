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
import { LinkType } from "../types/Dattype";









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
                        <Imagewithloading item={item} index={index} DAtalenght={data.personalDetail.links.length} />

                    </Fragment>
                )
            })}

            <Separator orientation="vertical" />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild className="flex items-center">



                        <span>
                            <Dialog title="email" data={data?.personalDetail.email + ""}>
                                <EnvelopeClosedIcon />
                            </Dialog>
                        </span>

                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{data?.personalDetail.email}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Separator orientation="vertical" />
            <TooltipProvider>
                <Tooltip>

                    <TooltipTrigger asChild className="flex items-center">
                        <span>
                            <Dialog title="Email" data={data?.personalDetail.Phone + ""}>
                                <ChatBubbleIcon />
                            </Dialog>
                        </span>

                    </TooltipTrigger>
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
    item: LinkType,
    index: number,
    DAtalenght: number

}
const Imagewithloading = (prop: IImage) => {

    const { item, index, DAtalenght } = prop


    const [loading, setloading] = useState(true)
    return (
        <>



            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>

                        <Link href={item.link}>

                            <Image style={{ display: loading ? "none" : "block" }} onLoad={() => {
                                console.log(item.title + " loaded")
                                setloading(false)

                            }} src={"https://icon.horse/icon/" + extractDomain(item.link)} alt={item.title} width={24} height={24} />
                            {/* {href} */}
                            {loading && <ReloadIcon className="animate-spin" />}


                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{item.title}</p>
                        {/* <div>{"https://icon.horse/icon/" + extractDomain(item.link)}</div> */}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>


            {index !== (DAtalenght - 1) && <Separator orientation="vertical" />}




        </>



    )
}