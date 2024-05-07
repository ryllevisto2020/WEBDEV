import { Suspense, useEffect, useState , lazy , React} from "react";
export default function Home(){
    const DataCo = lazy(()=>import("../Components/data.js"))
    const [responseData,setResponseData] = useState("");
    
    async function res(){
        await fetch("http://localhost:2030/authenticate",{
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
    
    useEffect(()=>{
        res();
    },[]);
    return(
        <>
        <h1>Home</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <DataCo status={responseData.status}/>
        </Suspense>
        </>
    )
}