'use client'
import react from 'react'
import { useQuery } from "@tanstack/react-query"

const page = () => {
    const { data,isLoading } = useQuery({
        queryKey: ['todo'],
        queryFn: () => fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
            res.json()
        ),
    }) 
    if(isLoading){
        return <>loading akoooo</>
    }

    return (
        <>
            xcv
        </>
    )
}


export default page