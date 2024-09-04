"use client"

import DATA from "./assets/Data.json"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import IData from "./types/Dattype"




interface ILayout {
    children: ReactNode
}



interface ICreatecontext {
    data: IData | undefined
}

export const Datastate = createContext<ICreatecontext>(null as any)


export const Context = (prop: ILayout) => {



    const [data, setData] = useState<IData>(DATA)









    const SendignData = {
        data
    }
    return (
        <>

            <Datastate.Provider
                value={
                    SendignData
                }

            >
                {prop.children}


            </Datastate.Provider>
        </>
    );
}


