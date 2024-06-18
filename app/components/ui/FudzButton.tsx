'use client'
import { Button } from "@radix-ui/themes"

interface IFudzButton {
    children:React.ReactNode,
    icon?:React.ReactNode, 
    color?:"ruby" | "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue",
    size?: "1" | "2" | "3" | "4",
    variant?: "surface" | "classic" | "ghost" | "solid" | "soft" | "outline" | undefined 
    className?:string | undefined
    hidden?: boolean 
    onClick?: () => void
}

const FudzButton = (props: IFudzButton) => {
    return (
        <Button radius="none" hidden={props.hidden} onClick={props.onClick} className={props.className} size={props.size} variant={props.variant} color={props.color} highContrast>
            {props.icon}
            {props.children}
        </Button>
    )
}
export default FudzButton