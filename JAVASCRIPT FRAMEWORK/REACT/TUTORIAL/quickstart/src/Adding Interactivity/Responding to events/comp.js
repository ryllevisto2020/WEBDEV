function ClickHandler(){
    alert("Button Click Alert");
}
export default function App(){
    return(
        <>
        {/* OUTLINE FUNCTION */}
        <input type="button" value="Click for Alert" onClick={ClickHandler}></input>
        {/* INLINE FUNCTION */}
        <input type="button" value="Click for Another Alert" onClick={()=>{alert("Button Click Another Alert")}}></input>
        {/* SEND PROPERTIES */}
        <input type="button" value="Click to get Properties" onClick={(properties)=>{console.log(properties)}}></input>
        </>
    )
}