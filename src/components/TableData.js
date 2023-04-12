import React from "react";

const TableData = (props) => {
  const { name, isBill, options, currentDate, finaltotal } = props;
  return (
    <div>
      {isBill && (
        <table>
          <thead>
            <tr>
              <td colSpan="4">{name}</td>
            </tr>
            <tr>
              <td colSpan="4">{currentDate}</td>
            </tr>
            <tr>
              <th>Items</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {options.map((item) => (
              <tr>
                <td>{item.selects}</td>
                <td>20</td>
                <td>{item.input}</td>
                <td>{item.total}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="3">Final-Total</td>
              <td>{finaltotal}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableData;
