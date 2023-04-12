import React, { useState } from "react";
import "./Assign6.css";

export default function Assign6() {
  const [data, setdata] = useState([]);
  const [defaultdata, setdefaultdata] = useState("");
  const [inputvalue, setinputvalue] = useState([]);

  function handleclick() {
    setdata((prevdata) => [...prevdata, " "]);
  }
  function handleChange(e, index) {
    const temp = [...inputvalue];
    temp[index] = e.target.value;
    setinputvalue(temp);
  }
  function handleValue(e) {
    setdefaultdata(e.target.value);
  }
  return (
    <div className="main">
      {data.map((item, index) => (
        <input
          placeholder="Type.."
          onChange={(event) => handleChange(event, index)}
        />
      ))}

      <div className="box">
        <input placeholder="Type.." onChange={handleValue} />
        <button onClick={handleclick}>Add</button>
      </div>

      <h3>Preview Your Data</h3>

      {!(inputvalue.length <= 0) &&
        inputvalue.map((item, index) => (
          <li key={index}>
            <span>Data from Field {index + 1}:- </span>
            <b>{item}</b>
          </li>
        ))}

      {defaultdata && (
        <li>
          <span>Data from Field {data.length + 1}:- </span>
          <b>{defaultdata}</b>
        </li>
      )}
    </div>
  );
}
