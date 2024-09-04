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
} from "./components/ui/alert-dialog"
import { ReactNode } from "react"


interface IAlert {
    btnTitle: string,
    description?: string
    children: ReactNode
}
export const Alert = (prop: IAlert) => {
    return (
        <>
            <AlertDialog>
                <AlertDialogTrigger>{prop.btnTitle}</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{prop.children}</AlertDialogTitle>
                        <AlertDialogDescription>{prop.description}</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel >Cancel</AlertDialogCancel>
                        <AlertDialogAction >Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}
