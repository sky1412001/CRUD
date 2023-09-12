import React, { useEffect, useState } from "react";

const Apicall = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userid, setUserId] = useState(null);
  useEffect(() => {
    getList();
  }, []);
  console.warn(data);
  function getList() {
    fetch("http://localhost:8080/Usera").then((result) => {
      result.json().then((resp) => {
        // console.warn("result",resp)
        setData(resp);
        setName(resp[0].name);
        setEmail(resp[0].email);
        setAddress(resp[0].address);
        setUserId(resp[0].id);
      });
    });
  }

  const deleteUser = (id) => {
    fetch(`http://localhost:8080/Usera/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getList();
      });
    });
  };
  function selectUser(id) {
    let item = data[id - 1];
    setName(item.name);
    setEmail(item.email);
    setAddress(item.address);
    setUserId(item.id);
  }
  function updateUser() {
    let item ={name,email,address,userid}
    fetch(`http://localhost:8080/Usera/${userid}`, {
      method: "PUT",
      headers:{
        'Accept' : 'application/json',
        'Content-Type' : "application/json"
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        getList();
      });
    });
  }

  return (
    <div className="App">
      <h1>GET ,DELETE, & PUT APi METHOD</h1>
      <br />
      <table border="1">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Address</td>
          <td>Actions</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>
              <button onClick={() => deleteUser(item.id)}>Delete</button></td>

              <td>
              <button onClick={() => selectUser(item.id)}>Update</button>
              </td>
            
          </tr>
        ))}
      </table>
      <br />
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={updateUser}>Update user</button>
      </div>
    </div>
  );
};

export default Apicall;
