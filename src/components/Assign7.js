import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import "./Assign7.css";

export const Context = React.createContext();

const Assign7 = () => {
  const [data, setData] = useState([]);
  const [details, setdetails] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function handleClick(index) {
    const temp = {
      id: data[index].id,
      title: data[index].title,
      body: data[index].body,
    };
    setdetails(temp);
  }
  return (
    <div className="Container">
      {/* <button onClick={handleClick}>Inc</button> */}
      {/* <Context.Provider value={data,handleClick}> */}
      <Context.Provider value={{ data, handleClick, details }}>
        <Posts />
      </Context.Provider>
    </div>
  );
};

export default Assign7;
