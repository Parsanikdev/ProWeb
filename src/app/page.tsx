"use client"


import { useContext } from "react";
import { Datastate } from "./Context";
import Image from "next/image";


export default function Home() {

  const { data } = useContext(Datastate)

  return (
    <>
      <div className="container mt-6 mx-auto flex items-center justify-around ">


        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hi I am mohammad
        </h1>
        <Image loading="lazy" width={360} height={360} src={data?.personalDetail.imageLink || ""} alt={`${data?.personalDetail.name} ${data?.personalDetail.family}'s personal image`} />

      </div>
    </>
  );
}

