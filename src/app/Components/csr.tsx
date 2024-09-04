"use client"

import { useEffect, useState } from "react";

const Csr = () => {

    const [state, setstate] = useState("");

    useEffect(() => {

        setTimeout(() => {
            setstate("Hello do you see me? i am from client")
        }, 500);
    }, [])


    return (
        <div>{state}</div>
    )
}


export default Csr;