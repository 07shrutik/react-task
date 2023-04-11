import React, { useEffect, useState } from "react";
import styles from "./Assign.module.css";
const Assign4 = () => {
  const [data, setdata] = useState([]);
  const [visible, setvisible] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  function handleClick(id) {
    setdata((prevData) => prevData.filter((item, i) => i !== id));
  }
  function handleChange(e) {
    setvisible(e.target.checked);
  }

  return (
    <div className={styles.main}>
      <label>
        Show Table
        <input type="checkbox" onChange={handleChange} value={visible}></input>
      </label>
      {visible && (
        <table>
          <thead>
            <tr>
              <th style={{ width: "200px" }}>User-Id</th>
              <th style={{ width: "200px" }}>Title</th>
              <th style={{ width: "200px", textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td
                  style={{
                    width: "100px",
                    textAlign: "center",
                  }}
                >
                  {item.id}
                </td>
                <td
                  style={{
                    width: "100px",
                    textAlign: "center",
                    color: "green",
                  }}
                >
                  {item.title}
                </td>
                <td style={{ width: "100px", textAlign: "center" }}>
                  <button onClick={() => handleClick(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Assign4;
