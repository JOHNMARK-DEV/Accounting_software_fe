import { Button, Inset, Flex, Dialog } from "@radix-ui/themes"
import { Children, Dispatch, SetStateAction, useRef, useState } from "react"
import FudzButton from "./FudzButton"

interface IFudzPlainModal {
    children: React.ReactNode,
    title: string,
    isOpen: boolean
    maxWidth?: string
    setModalState: Dispatch<SetStateAction<boolean>>

}
const FudzPlainModal = (props: IFudzPlainModal) => {
    const refs = useRef()

    return (
        <Dialog.Root open={props.isOpen}  >
            <Dialog.Content size="3" maxWidth={props.maxWidth} >
                <Flex justify={"between"}>
                    <Dialog.Title>{props.title}</Dialog.Title>
                    <FudzButton onClick={() => props.setModalState(!props.isOpen)}>Close</FudzButton>
                </Flex>
                <hr /> 
                {props.children}
            </Dialog.Content>
        </Dialog.Root>
    )
}
export default FudzPlainModal