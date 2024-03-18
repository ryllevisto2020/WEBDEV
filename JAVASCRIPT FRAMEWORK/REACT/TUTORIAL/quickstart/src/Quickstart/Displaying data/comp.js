import { useState } from "react"

export default function App(){

    /* OBJECT */
    const user = {"name":"Visto",}

    /* OBJECT USESTATE */
    const [address,setAddress] = useState({"address":"Nitang Avenue"})
    return(
        <>
        <h2>Name: {user.name}</h2>
        <h2>Address: {address.address}</h2>
        </>
    )
}