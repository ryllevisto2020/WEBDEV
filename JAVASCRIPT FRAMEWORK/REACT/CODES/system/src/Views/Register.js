export default function Register(){
    return (
        <>
        <h1>Register</h1>
        <input type="text" name="email" placeholder="Email" />
        <br />
        <input type="text" name="username" placeholder="Username" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="button" name="register-button" value="Register" />
        <br />
        {/*eslint-disable-next-line*/}
        <a href="/login" >You have Account? Login Here!</a>
        </>
    )
}