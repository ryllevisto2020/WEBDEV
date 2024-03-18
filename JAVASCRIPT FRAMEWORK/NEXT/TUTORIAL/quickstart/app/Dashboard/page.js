'use client'
import { usePathname } from "next/navigation"
export default function Page(){
    const path = usePathname();
    return(
        <>
        <h1>This is a Dashboard</h1>
        <a href={path+"/Message"}>Message</a>
        </>
    )
}