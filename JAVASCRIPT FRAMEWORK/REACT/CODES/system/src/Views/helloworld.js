/* ROUTER DOM HOOKS */
import { useParams } from "react-router-dom"
export default function HelloWorld(){
    const routes = useParams();
    console.log(routes);
    return(
        <>
        <h1>HelloWorld {routes.id}</h1>
        </>
    )
}