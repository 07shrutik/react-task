import React from "react";
import "./Assign8.css";
const Edit = () => {
  return (
    <div>
      {selectedIndex !== null && (
        <button onClick={handleSaveClick}>Save</button>
      )}
      {value.map((item, index) => (
        <div key={index} className="items">
          <p>{item}</p>
          <div className="btn">
            <button onClick={() => handleEditClick(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Edit;
