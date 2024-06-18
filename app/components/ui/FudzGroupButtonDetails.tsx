'use client'

import { ArrowLeftIcon, ArrowRightIcon, FileIcon, MagnifyingGlassIcon, Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons"
import FudzButton from "./FudzButton"
import { BiSave } from "react-icons/bi"
import { Card } from "@radix-ui/themes"


interface IFudzGroupButtonDetails {
    onAdd: () => void,
    onEdit: () => void,
    onDelete: () => void,
}


const FudzGroupButtonDetails = (props:IFudzGroupButtonDetails) => {
    return ( 
        <>
            <FudzButton size="2" onClick={props.onAdd} variant="surface" color="gray" icon={<PlusIcon />} >
                Add
            </FudzButton>
            <FudzButton size="2" variant="surface" color="gray" icon={<Pencil1Icon />}  >
                Edit
            </FudzButton>
            <FudzButton size="2" variant="surface" color="crimson" icon={<TrashIcon />}   >
                Remove
            </FudzButton> 
        </>
    )
}
export default FudzGroupButtonDetails