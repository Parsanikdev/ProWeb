"use client"


import { Fragment, useContext, useState } from "react";
import { Datastate } from "./Context";
import Image from "next/image";
import { Card } from "./Components/ShadcnComp/components/ui/card";
import { Separator } from "./Components/ShadcnComp/components/ui/separator";
import { Button } from "./Components/ShadcnComp/components/ui/button";
import Link from "next/link";
import IData from "./types/Dattype";
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Components/ShadcnComp/components/ui/carousel";
import extractDomain from "./utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Components/ShadcnComp/components/ui/tooltip";

import * as serviceWorkerRegistration from '@/serviceWorkerRegistration';

export default function Home() {

  const { data } = useContext(Datastate)

  return (
    <>
      <div className="container mt-14 mx-auto flex items-center flex-wrap justify-around ">

        <Separator className="lg:hidden" />
        <div>
          <h1 className="scroll-m-20 md:text-4xl font-extrabold tracking-tight lg:text-5xl
          text-2xl
          my-6
          ">
            👋 Hi, {`I'm ${data?.personalDetail.name}`}

          </h1>


          <p className="text-xl text-muted-foreground">
            {data?.personalDetail.description}
          </p>
        </div>
       
        <Image loading="lazy" width={480} height={480} src={data?.personalDetail.imageLink || ""} alt={`${data?.personalDetail.name} ${data?.personalDetail.family}'s personal image`} />
        <Card className="w-full mb-8 py-10 float-left ">
          <div className="w-10/12 mt-8 mx-auto">
            <div className="scroll-m-20 text-xl font-semibold tracking-tight">

              <blockquote className="lg:w-6/12  w-11/12 mx-auto mb-8 mt-6 border-l-2 pl-6 italic">
                {`Technologies I've used`}
              </blockquote>
              <GetbackListInList data={data} />
            </div>
          </div>

          <Separator className="mt-6 w-8/12 mx-auto" />
          <div className="w-10/12 mt-8 mx-auto">
            <div className="scroll-m-20 text-xl font-semibold tracking-tight">

              <blockquote className="lg:w-6/12  w-11/12 mx-auto mb-8 mt-6 border-l-2 pl-6 italic">
                {`Follow my socials`}
              </blockquote>
              <GetbackListInListLINK data={data} />
            </div>
          </div>

          <Separator className="mt-6 w-8/12 mx-auto" />
          <div className="mt-8 w-80 mx-auto">
            <Link href={"./about"}>
              <Button className="w-80">
                About page
              </Button>
            </Link>
            <p className="text-sm mt-2 font-thin opacity-65">for read more about me</p>
          </div>
        </Card>
      </div>
    </>
  );
}



const GetbackListInList = ({ data }: { data: IData | undefined }) => {
  return (
    <Fragment >
      <Carousel className="lg:w-6/12  w-11/12 mx-auto" >
      
        <CarouselContent className="cursor-pointer">
          {
            data?.side.map((item, index) => {
              return (
                <Fragment key={index}>

                  {
                    item.skills.map((itemi, indexi) => {
                      return (
                        <Fragment key={indexi}>

                          <CarouselItem className="md:basis-1/4 text-center">
                            <Card>{itemi}</Card>
                          </CarouselItem>



                        </Fragment>
                      )
                    })


                  }
                </Fragment>
              )
            })
          }


        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </Fragment>
  )
}


const GetbackListInListLINK = ({ data }: { data: IData | undefined }) => {
  return (
    <Fragment >
      <Carousel className="lg:w-6/12  w-11/12 mx-auto" >
        <CarouselContent className="-ml-4 cursor-pointer">

          {data?.personalDetail.links.map((item, index) => {
            return (
              <Fragment key={index}>
                <CarouselItem className="basis-1/2 md:basis-1/3 flex justify-center items-center">




                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link href={item.link}>
                          <Card className="flex justify-center items-center gap-3 px-8 py-1">
                            <Image src={"https://icon.horse/icon/" + extractDomain(item.link)} alt={item.title} width={24} height={24} />


                            <p className="text-nowrap text-sm" >{(item.title).substring(0, 6)}{((item.title).length > 8) && "..."}</p>
                          </Card>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>


                </CarouselItem>
              </Fragment>
            )
          })}


        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </Fragment>
  )
}

serviceWorkerRegistration.register()

