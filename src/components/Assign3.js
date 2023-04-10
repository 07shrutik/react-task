import React, { useState } from "react";

const Assign3 = () => {
  const [greet, setGreet] = useState("");
  const greetings = [
    "Good morning",
    "Hello",
    "Hi there",
    "Greetings",
    "Salutations",
    "Bonjour",
    "Hola",
    "Konnichiwa",
    "Shalom",
    "Ni hao",
    "Namaste",
  ];

  let res;
  function handleClick() {
    let num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    res = greetings[num];
    setGreet(res);
  }
  return (
    <div style={{ height: "200px", width: "300px", textAlign: "center" }}>
      <h1>Greetings Will Appear Here</h1>
      <h1 style={{ color: "green" }}>{greet}</h1>
      <button onClick={handleClick}>Greet Me!</button>
    </div>
  );
};

export default Assign3;
