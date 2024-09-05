"use client"
import { usePathname } from "next/navigation";


const Page = () => {
    const Mainpath = usePathname()
    let path = Mainpath.split("/")[2]


    return (

        <div>My Post: {path}</div>
    )
}

export default Page;