const data = [{
    name:"visto",
    isPacked: "Packed",
},{
    name:"dulay",
    isPacked:"not Packed",
},{
    name:"rylle",
    isPacked:"not Packed",
},{
    name:"claire",
    isPacked:"not Packed",
}]
export default function App(){
    return(
        <>
        {data.map((e)=>(
            <h2>Hi! {e.name},your package is {e.isPacked}!</h2>
        ))}
        </>
    )
}