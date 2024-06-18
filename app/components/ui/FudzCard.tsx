import { Button, Inset, Flex, Dialog, Card } from "@radix-ui/themes"
import { Children, Dispatch, SetStateAction, useRef, useState } from "react"
import FudzButton from "./FudzButton"

interface IFudzCard {
    children: React.ReactNode,
    className?: string,
}
const FudzCard = (props: IFudzCard) => {
    const refs = useRef()

    return (
        <Card className={props.className} >
            {props.children}
        </Card>
    )
}
export default FudzCard