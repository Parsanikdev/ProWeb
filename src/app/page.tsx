"use client"


import { useContext } from "react";
import { Datastate } from "./Context";
import Image from "next/image";
import { Card } from "./Components/ShadcnComp/components/ui/card";
import { Separator } from "./Components/ShadcnComp/components/ui/separator";
import { Button } from "./Components/ShadcnComp/components/ui/button";
import Link from "next/link";


export default function Home() {

  const { data } = useContext(Datastate)

  return (
    <>
      <div className="container mt-6 mx-auto flex items-center flex-wrap justify-around ">

        <Separator className="lg:hidden" />
        <div>
          <h1 className="scroll-m-20 md:text-4xl font-extrabold tracking-tight lg:text-5xl
          text-2xl
          my-6
          ">
            👋 Hi I am mohammad
          </h1>
          <h4 className="scroll-m-20 mt-4 tracking-tight">
            {data?.personalDetail.description}
          </h4>
        </div>
        <Image loading="lazy" width={360} height={360} src={data?.personalDetail.imageLink || ""} alt={`${data?.personalDetail.name} ${data?.personalDetail.family}'s personal image`} />
        <Card className="w-full h-96 float-left ">

          <div className="mt-28 w-80 mx-auto">
            <Link href={"./about"}>
              <Button className="w-80">
                About page
              </Button>
            </Link>
            <p className="font-thin opacity-65">for read more about me</p>
          </div>
        </Card>
      </div>
    </>
  );
}

