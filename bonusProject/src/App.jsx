import { useState, useEffect } from "react";
// import './style.css';

export default function App() {
  const [data, setdata] = useState([]);
  const [filtervalue, setfiltervalue] = useState([]);
  const [selectedvalue, setselectedvalue] = useState([]);

  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=reactjs")
      .then((res) => res.json())
      .then((data) => setdata(data.results));
  }, []);

  function handleChange(e) {
    let res = e.target.value;
    let filtervalues = data.filter((value) => {
      return value.package.name.toLowerCase().includes(res.toLowerCase());
    });

    if (res === "") {
      setfiltervalue([]);
    } else {
      setfiltervalue(filtervalues);
      console.log(filtervalues);
    }
  }
  let inputvalue;
  function handleChangeinput(e) {
    inputvalue = e.target.value;
    console.log(inputvalue);
  }
  function handleClick(id) {
    let result = filtervalue.filter((value, index) => index === id);
    let obj = {
      name: result[0].package.name,
      des: inputvalue,
    };
    setselectedvalue((prev) => [...prev, obj]);

    console.log(result[0].package.name);
  }
  function handleDelete(id) {
    let result = selectedvalue.filter((item, index) => id !== index);
    setselectedvalue(result);
  }
  return (
    <div>
      <input onChange={handleChange} />
      {filtervalue &&
        filtervalue.map((d, index) => (
          <div>
            <p>{d.package.name}</p>
            <input onChange={handleChangeinput} />
            <button onClick={() => handleClick(index)}>Add</button>
          </div>
        ))}
      <h1>Add fav values</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "lightgray" }}>
            <th style={{ padding: "8px", border: "1px solid black" }}>Name</th>
            <th style={{ padding: "8px", border: "1px solid black" }}>
              Description
            </th>
            <th style={{ padding: "8px", border: "1px solid black" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedvalue &&
            selectedvalue.map((d, index) => (
              <tr key={index} style={{ backgroundColor: "white" }}>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  {d.name}
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  {d.des}
                </td>
                <td style={{ padding: "8px", border: "1px solid black" }}>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "8px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
