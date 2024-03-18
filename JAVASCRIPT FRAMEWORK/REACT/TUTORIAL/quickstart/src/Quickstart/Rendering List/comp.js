import { useState } from "react";

export default function App(){

    /* OBJECT ARRAY */
    const user = [{"name":"Visto"},{"name":"Dulay"}];

    /* OBJECT ARRAY USESTATE */
    const [address,setAddress] = useState([{"address":"Nitang"},{"address":"Virginia"}])

    /* DEBUGER */
    console.log(user);
    console.log(address);
    return(
    <>
    {user.map((x)=><h2>{x.name}</h2>)}
    {address.map((x)=><h2>{x.address}</h2>)}
    </>
    )
}