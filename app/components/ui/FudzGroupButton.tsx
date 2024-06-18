'use client'

import { ArrowLeftIcon, ArrowRightIcon, FileIcon, MagnifyingGlassIcon, Pencil1Icon, PlusIcon, TrashIcon } from "@radix-ui/react-icons"
import FudzButton from "./FudzButton"
import { BiSave } from "react-icons/bi" 
import useToggle from "@/hooks/useToggle"
import { memo } from "react"



interface IFudzGroupButton {
    onCLickAdd?: () => void,
    onClickEdit?: () => void,
    onClickRemove?: () => void,
    onClickSave?: () => void,
    onClickCancel?: () => void,
    onClickFind?: () => void,
    onClickPrint?: () => void,
    onClickPrev?: () => void,
    onClickNext?: () => void,
}

const FudzGroupButton = (prop: IFudzGroupButton) => { 
    const { isToggled, toggle } = useToggle()
    return (
        <div className="mb-4">
            <FudzButton
                hidden={isToggled}
                size="2"
                variant="surface"
                color="gray"
                icon={<PlusIcon />}
                onClick={() => {
                    prop.onCLickAdd
                    toggle()
                }} >
                Add
            </FudzButton>
            <FudzButton
                hidden={isToggled}
                size="2"
                variant="surface"
                color="gray"
                icon={<Pencil1Icon
                />} onClick={() => {
                    prop.onCLickAdd
                    toggle()
                }} >
                Edit
            </FudzButton>
            <FudzButton
                hidden={isToggled}
                variant="surface"
                color="crimson" icon={<TrashIcon />}
                onClick={() => {
                    prop.onCLickAdd
                    toggle()
                }} >
                Remove
            </FudzButton>
            <FudzButton
                hidden={!isToggled}
                variant="surface"
                color="gray"  
                icon={<BiSave />}
                onClick={() => {
                    toggle()
                    prop.onClickSave 
                }} >
                Save
            </FudzButton>
            <FudzButton
                hidden={!isToggled}
                size="2"
                variant="surface"
                color="gray"
                icon={<TrashIcon />}
                onClick={() => {
                    prop.onCLickAdd
                    toggle()
                }} >
                Cancel
            </FudzButton>
            <FudzButton
                hidden={isToggled}
                size="2"
                variant="surface"
                color="gray"
                icon={<MagnifyingGlassIcon />}
                onClick={() => {
                    prop.onCLickAdd
                    toggle()
                }} >
                Find
            </FudzButton>
            <FudzButton
                hidden={isToggled}
                size="2"
                variant="surface"
                color="bronze" icon={<FileIcon />}
                onClick={() => {
                    prop.onCLickAdd
                    toggle()
                }} >
                Print
            </FudzButton>
            <FudzButton
                hidden={isToggled}
                size="2"
                variant="surface"
                color="gray"
                icon={<ArrowLeftIcon />}
                onClick={() => {
                    prop.onCLickAdd
                    toggle()
                }} >
                Prevous
            </FudzButton>
            <FudzButton
                hidden={isToggled}
                size="2"
                variant="surface"
                color="gray"
                icon={<ArrowRightIcon />}
                onClick={() => {
                    prop.onCLickAdd
                    toggle()
                }}>
                Next
            </FudzButton>
        </div>
    )
}
export default memo(FudzGroupButton)