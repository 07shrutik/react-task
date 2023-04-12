import React from "react";

const Option = (props) => {
  const { data, handleSelectChange, handleChange, handleClick } = props;
  return (
    <div>
      {data.map((item, index) => (
        <>
          <hr style={{ borderTop: "1px solid black" }} />

          <div className="box">
            <label>
              Select Product
              <select
                key={index}
                id="mySelect"
                onChange={(event) => handleSelectChange(event, index)}
              >
                <option value="Sugar">Sugar</option>
                <option value="Wheat" selected>
                  Wheat
                </option>
                <option value="Rice">Rice</option>
                <option value="Dal">Dal</option>
              </select>
            </label>

            <label>
              Enter Quantity
              <input
                type="text"
                placeholder="Enter in Kg's"
                onChange={(event) => handleChange(event, index)}
              />
            </label>
            {data.length - 1 === index && (
              <button onClick={handleClick}>Add</button>
            )}
          </div>
          <hr style={{ borderTop: "1px solid black" }} />
        </>
      ))}
    </div>
  );
};

export default Option;
