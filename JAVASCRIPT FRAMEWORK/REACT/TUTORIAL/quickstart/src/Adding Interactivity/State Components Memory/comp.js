import { useState } from "react"
export default function App(){
    const [count,setCount] = useState(0);
    return (
        <>
        <h1>Count:{count}</h1>
        <input type="button" value="Click to set the value of useState" onClick={()=>{
            setCount(count + 1)
            }}></input>
        </>
    )
}