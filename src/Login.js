import React, { useState } from "react";



const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit()
  {
    let data={name,email,address}
  // console.warn(data);
    fetch("http://localhost:8080/Usera", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(data)
    }).then((resp)=>{
      // console.warn("resp",resp);;
      resp.json().then((result)=>{
        console.warn("result",result)
      })
    })
  }
  return (
    <div>
    <h1>POST API METHOD</h1>
      <input
        type="text"
        value={name}
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        value={address}
        name="address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
     
   
    </div>
  );
};

export default Login;
