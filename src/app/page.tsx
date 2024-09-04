"use client"


import { useContext } from "react";
import { Datastate } from "./Context";


export default function Home() {

  const { data } = useContext(Datastate)

  return (
    <>

      this site is creating by {data?.personalDetail.name}
    </>
  );
}
