import React, { useState } from "react";
import styles from "./Assign5.module.css";

const Assign5 = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [pass, setpass] = useState("");

  const [data, setdata] = useState([]);

  function handleNameChange(e) {
    setname(e.target.value);
  }
  function handleEmailChange(e) {
    setemail(e.target.value);
  }
  function handleAgeChange(e) {
    setage(e.target.value);
  }
  function handlePass(e) {
    setpass(e.target.value);
  }

  function handleSubmit() {
    setdata((prevdata) => [
      ...prevdata,
      {
        name: name,
        email: email,
        age: age,
      },
    ]);
    setname("");
    setemail("");
    setage("");
    setpass("");
  }

  function handleDelete(id) {
    setdata((prevData) => prevData.filter((item, index) => index !== id));
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box1}>
          <h2 style={{ textAlign: "center" }}>Enter Your Details</h2>
          <label>
            UserName:
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={handleNameChange}
              value={name}
            ></input>
          </label>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={handleEmailChange}
              value={email}
            ></input>
          </label>
          <label>
            Age:
            <input
              type="number"
              placeholder="Enter Your Age"
              value={age}
              onChange={handleAgeChange}
            ></input>
          </label>
          <label>
            Password:
            <input
              type="password"
              value={pass}
              onChange={handlePass}
              placeholder="Enter Your Password"
            ></input>
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className={styles.box2}>
          <h2 style={{ textAlign: "center" }}>Preview Your Data</h2>
          <h4>UserName :- {name}</h4>
          <h4>UserEmail :-{email}</h4>
          <h4>UserAge :-{age}</h4>
        </div>
      </div>

      {/* <hr /> */}
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assign5;
