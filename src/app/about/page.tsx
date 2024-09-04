"use client"

import { useContext } from "react";
import { Datastate } from "../Context";

const About = () => {

    const {data} = useContext(Datastate)


    const name = data?.personalDetail.name
    return (
        <div>your name is : {name}</div>
    )
}

export default About;