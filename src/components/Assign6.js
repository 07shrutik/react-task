import React, { useState } from "react";
import "./Assign6.css";
import Option from "./Option";
import TableData from "./TableData";

export default function Assign6() {
  const [data, setdata] = useState([""]);
  const [finaltotal, setfinaltotal] = useState(0);
  const [options, setoptions] = useState([
    { selects: "", input: "", total: "" },
  ]);
  const [isBill, setisBill] = useState(false);
  const [name, setname] = useState("");
  const currentDate = new Date().toLocaleDateString();

  function handleCustomerName(e) {
    setname(e.target.value);
  }

  function handleClick() {
    setdata((prevdata) => [...prevdata, ""]);
    setoptions([...options, { selects: "", input: "", total: "" }]);
  }

  function handleSelectChange(e, index) {
    const temp = [...options];
    temp[index].selects = e.target.value;
    setoptions(temp);
  }

  function handleChange(e, index) {
    const temp = [...options];
    temp[index].input = e.target.value;
    setoptions(temp);
  }

  function createBill() {
    var price = 20;
    var sum = 0;
    for (let i = 0; i < options.length; i++) {
      let res;
      var temp = [...options];
      res = Number(options[i].input) * price;
      temp[i].total = res;
      //   temp[i].total = res;
      setoptions(temp);
      sum = sum + Number(temp[i].total);
    }
    setfinaltotal(sum);
    setisBill(true);
  }
  return (
    <div>
      <label>
        Customer Name
        <input
          style={{ width: "120px" }}
          type="text"
          placeholder="Enter Name"
          onChange={handleCustomerName}
        />
      </label>
      <Option
        data={data}
        handleSelectChange={handleSelectChange}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      <TableData
        isBill={isBill}
        name={name}
        currentDate={currentDate}
        options={options}
        finaltotal={finaltotal}
      />
      <button onClick={createBill}>Generate Bill</button>
    </div>
  );
}
