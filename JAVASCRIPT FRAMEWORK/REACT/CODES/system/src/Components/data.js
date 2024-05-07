import { useEffect, useState } from "react"

export default function Data({status}){
    const [responseData,setResponseData] = useState([]);
    const [test,setTest] = useState("");

    function setStatus(setStat){
        setTest(status);
    }
    async function res(){
        await fetch("http://localhost:2030/data",{
            method: "GET",
            credentials: "include",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(async function(response){
            setResponseData(await response.json());
        });
    }

    function DataComponent({status}){
        if(status === 404){
            return(
                <>
                <h3>Please <a href="/login">Login</a> to see Data</h3>
                </>
            )
        }
        if(status === 200){
            return(
                <>
                <a href="#" >Logout</a>
                <h3>Data</h3>
                {responseData.map((x)=><h1>{x.name}</h1>)}
                </>
            )
        }
    }

    useEffect(()=>{
        
setStatus(status);
        console.log(test);
    },[responseData,test])

    return(
        <>
        <DataComponent status={status}/>
        </>
    )
}