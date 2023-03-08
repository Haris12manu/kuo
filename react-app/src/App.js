import "./App.css";
import { useState } from "react";
import Axios from "axios";


function App() {
  const [ris_username, setName] = useState("");
  const [ris_email, setGmail] = useState("");
  const [ris_password, setPass] = useState("");
 
  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get("http://localhost:3333/User").then((response) => {
      setUserList(response.data);
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3333/create", {
      ris_username: ris_username,
      ris_email:  ris_email,
      ris_password: ris_password,
      
    }).then(() => {
      setUserList([
        ...userList,
        {
          ris_username: ris_username,
          ris_email: ris_email,
          ris_password: ris_password,
        },
      ]);
    });
  };

  

 

  return (

    <div className="App container">
      <h1>Login</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="age">email:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter age"
              onChange={(event) => {
                setGmail(event.target.value)
              }}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="country">password:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter country"
              onChange={(event) => {
                setPass(event.target.value)
              }}
            />
          </div>
         
         
          <button onClick={addUser} class="btn btn-success">
            Add Employee
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getUser}>
          Show Employees
        </button>
        <br />
        <br />
        {userList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">Name: {val.ris_username}</p>
                <p className="card-text">gmail: {val.ris_email}</p>
                <p className="card-text">password: {val.ris_password}</p>
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;