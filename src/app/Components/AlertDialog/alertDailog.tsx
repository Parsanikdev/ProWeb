import { ReactNode, useContext } from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../ShadcnComp/components/ui/alert-dialog"
import IData from "@/app/types/Dattype";
import { toast } from "sonner";
import { Datastate } from "@/app/Context";



interface Iprop {
    children: ReactNode;
    title: string;
    data:string
}

export const Dialog = (prop: Iprop) => {

    const { data } = useContext(Datastate)
    return (
        <AlertDialog>
            <AlertDialogTrigger>{prop.children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{prop.title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {prop.data}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Confirm</AlertDialogCancel>
                    <AlertDialogAction
                    onClick={()=>{
                        toasted(data, prop.data)
                    }}
                    >Copy</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}




const toasted = (data: IData | undefined, ID: string) => {


    if (ID[0] === "#") {
        return (
            navigator.clipboard.writeText(data?.Domain + "/about/#" + ID).then(() => {
                toast.success(ID.replace("#", "") + " Link Copied!")
            })
        )
    } else {
        return (
            navigator.clipboard.writeText(ID).then(() => {
                toast.success(ID.replace("#", "") + " Link Copied!")
            })
        )
    }

}