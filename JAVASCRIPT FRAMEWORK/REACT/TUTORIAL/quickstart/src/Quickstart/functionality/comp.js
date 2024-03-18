function handler(){
    alert("Hello World");
}

export default function App(){
    return(
        <>
        <button type="button" onClick={handler}>Click</button>
        </>
    )
}