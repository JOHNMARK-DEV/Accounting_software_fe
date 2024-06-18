'use client'
import { Button, Flex, TextArea, TextField } from "@radix-ui/themes"

interface IFudzTextField {
    label?: string, 
    className?: string | undefined
    direction?: "row" | "column" | "row-reverse" | "column-reverse" 
    disabled?:boolean
    value?:string
}

const FudzTextArea = (props: IFudzTextField) => {
    return (
        <Flex direction={props.direction} justify={'end'}>
            <label className="p-0 m-0 ">{props.label}   </label>
            <TextArea value={props.value} disabled={props.disabled} className="p-0 m-0 w-100" radius="full"/>
        </Flex>

    )
}
export default FudzTextArea