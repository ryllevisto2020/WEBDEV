import { useEffect, useState } from "react";

function App() {
  const [token,setToken] = useState();
  const [verify,setVerify] = useState("Not Verified");

  const GetCsrfToken =async function(){
    const response = await fetch("http://localhost:2030/form",{
      mode:"cors",
      credentials:"include",
      method: 'GET',
    })
    const data = await response.json();
    setToken(data.csrfToken)
    console.log(data);
  }

  const verifyToken = async function(){
    const response = await fetch("http://localhost:2030/process",{
      mode:"cors",
      credentials: "include",
      method:"POST",
      headers: {
        "csrf-token":token
      }
    })
    const data = await response.text();
    setVerify(data);
  }
  useEffect(()=>{
    GetCsrfToken();
  },[])
  return (
    <div className="App">
      <h1>CSRF TOKEN:{token}</h1>
      <input type="button" value="verify CSRF TOKEN" onClick={verifyToken}></input>
      <h1>CSRF STATUS:{verify}</h1>
    </div>
  );
}

export default App;
