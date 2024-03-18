import Comp1 from './Creating and nesting components/comp.js';
import Comp2 from './Displaying data/comp.js';
import Comp3 from './Rendering List/comp.js'
import Comp4 from './functionality/comp.js'
export default function App(){
    return(
        <>
        <h1>QUICK START</h1>

        <h1>Creating and Nesting components</h1>
        <Comp1 />

        <br/>
        <br/>

        <h1>Displaying Data</h1>
        <Comp2/>

        <br/>
        <br/>

        <h1>Rendering List</h1>
        <Comp3/>

        <br/>
        <br/>

        <h1>Functionality</h1>
        <Comp4/>
        </>
    )
}