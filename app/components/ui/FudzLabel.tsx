'use client'
import { Button, Flex, TextArea, TextField } from "@radix-ui/themes"

interface IFudzLabel{
    label?: string, 
    className?: string | undefined
}

const FudzLabel = (props: IFudzLabel) => {
    return ( 
        <label className="p-0 m-0 ">{props.label}</label> 
    )
}
export default FudzLabel