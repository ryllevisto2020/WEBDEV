
/* Import Export Components */
import Comp1 from '../Describing the Ui/Import Export Component/comp.js'

/* Passing props to Components */
import Comp2 from '../Describing the Ui/Passing Props to Components/comp.js'

/* First Componenet */
function MyFirstComp(){
    return (
    <>
    <h2>This is my First Component</h2>
    </>
    )
}

export default function App(){
    return(
        <>
        <h1>Describing the UI</h1>

        {/* First Component */}
        <MyFirstComp />

        {/* Import Export Component*/}
        <Comp1 />

        {/* Passing props to Components */}
        <Comp2 name={"Visto"} age={18}/>
        </>
    )
}