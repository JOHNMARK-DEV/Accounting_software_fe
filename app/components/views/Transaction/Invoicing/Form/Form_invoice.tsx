import FudzGroupButton from "@/components/ui/FudzGroupButton"
import FudzTextArea from "@/components/ui/FudzTextArea"
import FudzTextField from "@/components/ui/TextFields/FudzTextField"
import FudzTextFieldWithDescriptionOfBusinessPartner from "@/components/ui/TextFields/FudzTextFieldWithDescriptionOfBusinessPartner"
import FudzTextFieldWithDescriptionOfCurrency from "@/components/ui/TextFields/FudzTextFieldWithDescriptionOfCurrency"
import useToggle from "@/hooks/useToggle"
import { InvoiceSchema } from "@/models/InvoiceSchema"
import { Typography } from "@mui/material"
import { Button, Flex } from "@radix-ui/themes"
import { DetailedHTMLProps, InputHTMLAttributes, useRef, useState } from "react"
import { FieldValues, UseFormHandleSubmit, UseFormRegister, useForm } from "react-hook-form"
import { z } from "zod"

type IFormInvoice = {
    onSubmit: (data: any) => void
}

export const FormInvoice = ({ onSubmit }: IFormInvoice) => {

    const { isToggled } = useToggle()
    // alertisEditable)
    // const [isEditable, setIsEditable] = useState(false)

    const {
        register,
        handleSubmit,
        setValue
    } = useForm()

    const submitForm = (val: any) => {
        console.log(val)

    };

    const getItem = () => {
        alert("get item")
    }

    return (
        <>
            <form onSubmit={handleSubmit(submitForm)}>
                <div>
                    <Typography variant="h4">Sales Voucher</Typography>
                    <FudzGroupButton onClickSave={() => handleSubmit(submitForm)} />
                </div>
                <Flex gap={"9"}>
                    <Flex direction="column" gap={'1'} justify={'start'} >
                        <FudzTextField
                            label="Invoice No."
                            register={register("document_no")}
                            disabled />

                        <FudzTextField
                            label="D.R No."
                            register={register("dr")}
                            disabled={!isToggled} />

                        <FudzTextFieldWithDescriptionOfBusinessPartner
                            label="Client Code"
                            disabled={!isToggled}
                            isWithItemModal
                            register={register("client_code")}
                            withItemModal={
                                {
                                    data: [],
                                    callbackFn: () => getItem(),
                                    setValue: setValue
                                }
                            }

                        />

                        <FudzTextFieldWithDescriptionOfCurrency
                            label="Currency Code"
                            disabled={!isToggled}
                            register={register("currency_code")}
                            isWithItemModal
                            withItemModal={
                                {
                                    data: [],
                                    callbackFn: () => getItem(),
                                    setValue:setValue
                                }
                            }
                        />

                    </Flex>
                    <Flex direction="column" gap={'1'}  >
                        <Flex direction="row" gap={'1'}  >
                            <Flex direction="column" gap={'1'}  >
                                <FudzTextField label="Amount" disabled
                                    register={register("amount")} />
                                <FudzTextField label="Exchange Rate" disabled={!isToggled} />
                                <FudzTextField label="Based Rate" disabled={!isToggled} />
                                <FudzTextField label="Based Amount" disabled={!isToggled} />
                            </Flex>
                            <Flex direction="column" gap={'1'}  >
                                <FudzTextField label="Date" disabled={!isToggled} />
                                <FudzTextField label="P.O No" disabled={!isToggled} />
                                <FudzTextField label="Due Date" disabled={!isToggled} />
                                {/* <FudzTextField label="Particulars" disabled={!isToggled} /> */}
                            </Flex>
                        </Flex>
                        <FudzTextArea disabled={!isToggled} direction="column" label="Particulars" />
                        <FudzTextArea disabled={!isToggled} direction="column" label="Amount in words" />
                    </Flex>
                </Flex>
            </form>
        </>
    )
}