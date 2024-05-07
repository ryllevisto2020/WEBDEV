const data = [{
    name:"visto",
    isPacked: true,
},{
    name:"dulay",
    isPacked:false,
},{
    name:"rylle",
    isPacked:false,
},{
    name:"claire",
    isPacked:false
}]
function Item({name,isPacked}){
    if(isPacked){
        return(
            <>
            <h2>Hi! {name}, Your Package is already Packed!</h2>
            </>
        )
    }else{
        return(
            <>
            <h2>Hi! {name}, Your Package is not Packed!</h2>
            </>
        )
    }
    
}
export default function App(){
    return (
        <>
        {data.map((e)=>(
        <Item name={e.name} isPacked={e.isPacked}/>
        ))}
        </>
    )
}