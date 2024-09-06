import { Datastate } from "@/app/Context"
import Link from "next/link"
import { Fragment, useContext } from "react"
import { Separator } from "../ShadcnComp/components/ui/separator"

const Footer = () => {

    const WebsiteLink = "https://mosayyebnezhad.ir/"
    const GithubLink = "https://github.com/mosayyebnezhad/proweb"
    return (


        <Fragment>
            <Separator className="my-4 float-left" />
            <div className="text- mb-4 text-muted-foreground container mx-auto">
                <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by <Link href={WebsiteLink}>

                        <span className="font-bold border-b-2">
                            mohammad
                        </span>

                    </Link> . The source code is available on <Link href={GithubLink}>

                        <span className="font-bold border-b-2">
                            Github
                        </span>

                    </Link>

                </p>
            </div>
        </Fragment>
    )
}


export default Footer