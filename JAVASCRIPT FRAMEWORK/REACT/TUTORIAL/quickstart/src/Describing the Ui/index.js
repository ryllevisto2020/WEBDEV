
/* Import Export Components */
import Comp1 from '../Describing the Ui/Import Export Component/comp.js'

/* Passing props to Components */
import Comp2 from '../Describing the Ui/Passing Props to Components/comp.js'

/* Javascript Curly Braces */
import Comp3 from '../Describing the Ui/Javascript Curly Braces/comp.js'

/* Conditional Rendering */
import Comp4 from '../Describing the Ui/Conditional Rendering/comp.js'

/* Rendering List */
import Comp5 from '../Describing the Ui/Rendering List/comp.js'

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
        <h1>-------------------------------</h1>
        {/* First Component */}
        <MyFirstComp />
        <h1>-------------------------------</h1>
        {/* Import Export Component*/}
        <Comp1 />
        <h1>-------------------------------</h1>
        {/* Passing props to Components */}
        <Comp2 name={"Visto"} age={18}/>
        <h1>-------------------------------</h1>
        {/* Javscript Curly Braces */}
        <Comp3/>
        <h1>-------------------------------</h1>
        {/* Condition Rendering */}
        <Comp4/>
        <h1>-------------------------------</h1>
        {/* Rendering List */}
        <Comp5/>
        <h1>-------------------------------</h1>
        </>
    )
}