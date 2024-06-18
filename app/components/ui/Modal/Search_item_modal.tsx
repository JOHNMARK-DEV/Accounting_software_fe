'use client'
import { Button } from "@radix-ui/themes"
import { Dispatch, SetStateAction, useState } from "react"

type items = {
    id: number,
    code: string,
    name: string
}

interface ISearch_item_modal{ 
    icon?:React.ReactNode, 
    color?:"ruby" | "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue",
    size?: "1" | "2" | "3" | "4", 
    className?:string | undefined
    data: items 
}

const search_item_modal = (props: ISearch_item_modal) => { 
    console.log(props.data)
    const list = props.data
    return (
       <>
     adsfads
       </>
    )
}
export default search_item_modal