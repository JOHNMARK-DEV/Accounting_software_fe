'use client'

import react, { Dispatch, SetStateAction, useState } from 'react'
import Offset_ewt from './Offset_ewt'
import Offset_final_tax from './Offset_final_tax'
import Offset_fixed_asset from './Offset_fixed_asset'
import Offset_input_vat from './Offset_input_vat'
import Offset_output_vat from './Offset_output_vat'
import FudzPlainModal from '../../../ui/FudzPlainModal'
import Setup_cash_entry from './Setup_cash_entry'
import Setup_ewt from './Setup_ewt'
import Setup_fixed_asset from './Setup_fixed_asset'
import Setup_final_tax from './Setup_final_tax'
import Setup_input_vat from './Setup_input_vat'
import Setup_output_vat from './Setup_output_vat'
Setup_final_tax

type IAttachment = {
    type:
    "Offset_ewt" |
    "Offset_final_tax" |
    "Offset_fixed_asset" |
    "Offset_input_vat" |
    "Offset_output_vat" |
    "Setup_cash_entry" |
    "Setup_ewt" |
    "Setup_final_tax" |
    "Setup_fixed_asset" |
    "Setup_input_vat" |
    "Setup_output_vat"
    isOpen: boolean,
    setIsOpenModalState: Dispatch<SetStateAction<boolean>>
}

const Attachment = (props: IAttachment) => {

    const attachment_list = {
        Offset_ewt: <Offset_ewt />,
        Offset_final_tax: <Offset_final_tax />,
        Offset_fixed_asset: <Offset_fixed_asset />,
        Offset_input_vat: <Offset_input_vat />,
        Setup_cash_entry: <Setup_cash_entry />,
        Setup_ewt: <Setup_ewt />,
        Setup_final_tax: <Setup_final_tax />,
        Setup_fixed_asset: <Setup_fixed_asset />,
        Setup_input_vat: <Setup_input_vat />,
        Setup_output_vat: <Setup_output_vat />,
    }

    const find_attachment = () => {
        switch (props.type) {
            case "Offset_ewt":
                return attachment_list.Offset_ewt
                break;

            case "Offset_final_tax":
                return attachment_list.Offset_final_tax
                break;

            case "Offset_fixed_asset":
                return attachment_list.Offset_fixed_asset
                break;

            case "Offset_input_vat":
                return attachment_list.Offset_input_vat
                break;

            case "Setup_cash_entry":
                return attachment_list.Setup_cash_entry
                break;

            case "Setup_ewt":
                return attachment_list.Setup_ewt
                break;

            case "Setup_final_tax":
                return attachment_list.Setup_final_tax
                break;

            case "Setup_fixed_asset":
                return attachment_list.Setup_fixed_asset
                break;

            case "Setup_input_vat":
                return attachment_list.Setup_input_vat
                break;

            case "Setup_output_vat":
                return attachment_list.Setup_output_vat
                break;


            default:
                break;
        }
    }

    return (
        <FudzPlainModal
            title={props.type}
            isOpen={props.isOpen}
            setModalState={props.setIsOpenModalState}
            maxWidth='70%'
        >
            {find_attachment()}
        </FudzPlainModal>
    )
}
export default Attachment