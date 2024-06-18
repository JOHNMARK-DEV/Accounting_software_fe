'use client'
import { Box, Button, Flex, TextField } from "@radix-ui/themes"
import { FieldValues, RegisterOptions, UseFormRegister, UseFormRegisterReturn } from "react-hook-form"

interface IFudzTextField  {
    label?: string,
    className?: string | undefined,
    width?: string,
    disabled?:boolean ,
    register?:any
    
}

const FudzTextField = (props: IFudzTextField) => {
    return (
        <Flex direction="row" width={'100%'} justify={'end'}>
            <label className="p-0 m-0 text-sm mr-2">{props.label }  </label> 
            <Box width={props.width}>
                <TextField.Root className="p-0 m-0" radius="large" disabled={props.disabled}  {...props.register} />
            </Box>
        </Flex>

    )
}
export default FudzTextField