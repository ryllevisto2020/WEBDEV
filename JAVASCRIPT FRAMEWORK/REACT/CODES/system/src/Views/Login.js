import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate = useNavigate();
    function login(){
        fetch("http://localhost:2030/test",{
            method: "GET",
            credentials: "include",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
            }
        }).then(function(response){
            console.log(response)
            navigate('/');
        });
    }
    return (
        <>
        <h1>LOGIN</h1>
        <input type="text" name="username-email" placeholder="Email/Username" />
        <br/>
        <input type="password" name="password" placeholder="password" />
        <br/>
        <input type="button" name="login-button" value="Login" onClick={()=>{login()}}/>
        <br />
        {/*eslint-disable-next-line*/}
        <a href="/register" >No Account? Register Here!</a>
        <br/>
        {/*eslint-disable-next-line*/}
        <a href="#" >Forgot Password!</a>
        </>
    )
}