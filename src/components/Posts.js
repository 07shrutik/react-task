import React, { useContext } from "react";
import { Context } from "./Assign7";
// import "./Child.css";

const Posts = () => {
  const { data, handleClick, details } = useContext(Context);

  return (
    <div className="main">
      <div className="box1">
        <h1>All Posts</h1>
        <table>
          <thead>
            <th colSpan={3}>Posts</th>
          </thead>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td k>{item.title}</td>
              <button onClick={() => handleClick(index)}>Veiw-Details</button>
            </tr>
          ))}
        </table>
      </div>
      <div className="box2">
        <h1>Post-Details</h1>
        {details ? (
          <table>
            <thead>
              <th colSpan={2}>Post-Details</th>
            </thead>
            <tr>
              <td style={{ width: "80px" }}>User-Id</td>
              <td>{details.id}</td>
            </tr>
            <tr>
              <td>Post-Title</td>
              <td>{details.title}</td>
            </tr>
            <tr>
              <td>Post-Body</td>
              <td>{details.body}</td>
            </tr>
          </table>
        ) : (
          <h3>Click on Veiw details button to get details about any Post</h3>
        )}
      </div>
    </div>
  );
};

export default Posts;
