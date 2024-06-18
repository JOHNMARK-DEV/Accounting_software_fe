'use client'
import { Box, Button, Flex, TextField } from "@radix-ui/themes"
import Show_fetch_and_select_items_modal from "../Modal/Transactions/show_fetch_and_select_items_modal"
import useToggle from "@/hooks/useToggle"
import { LegacyRef, useReducer, useRef, useState } from "react"
import FudzTextArea from "../FudzTextArea"
import { FieldValues, UseFormSetValue } from "react-hook-form"

interface IFudzTextFieldWithDescriptionOfBusinessPartner {
    label?: string,
    className?: string | undefined,
    width?: string,
    disabled?: boolean
    register?: any
    isWithItemModal?: boolean
    withItemModal?: {
        data: any,
        callbackFn: () => void,
        setValue: UseFormSetValue<FieldValues>
    }
}

const FudzTextFieldWithDescriptionOfBusinessPartner = (props: IFudzTextFieldWithDescriptionOfBusinessPartner) => {
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const [openItemModal, setItemModal] = useState(false)
    const handleOpenItemModal = (val: string) => {
        if (val == "*") {
            setItemModal(!openItemModal)
            setValue("")
            // props.withItemModal?.callbackFn() 
        }
    }
    const handleSelectedItemFromModal = (value: any) => {
        props.withItemModal?.setValue("client_id",value.id)
        props.withItemModal?.setValue("client_code",value.code)
        setValue(value.code)
        setDescription(value.name)
        setItemModal(false)
    }

    return (
        <Flex direction="row" width={'100%'} justify={'end'} >
            <Show_fetch_and_select_items_modal onClickSelectItem={(v) => handleSelectedItemFromModal(v)} openItemModal={openItemModal} setItemModal={setItemModal} />
            <label className="p-0 m-0 text-sm mr-2">{props.label}  </label>
            <Box width={props.width}>
                <Flex gap={"1"} direction={'column'}>
                    <TextField.Root
                        {...props.register} 
                        value={value}
                        onChange={(e) => setValue((prev) => e.target.value)}
                        className="p-0 m-0"
                        radius="large"
                        disabled={props.disabled}
                        onKeyUp={(e) => {
                            const val = e.currentTarget.value
                            if (!props.isWithItemModal) {
                                return
                            }
                            if (val == "*") {
                                handleOpenItemModal(e.currentTarget.value)
                                e.currentTarget.value = ""
                            }
                        }}

                    />
                    {
                        props.isWithItemModal && <FudzTextArea value={description} disabled />
                    }
                </Flex>
            </Box>
        </Flex>

    )
}
export default FudzTextFieldWithDescriptionOfBusinessPartner