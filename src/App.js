import * as React from "react";
// import "./style.css";
import Todo from "./Todo";
import { Provider } from "react-redux";
import { store } from "./Slic";
import Count from "./Count";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <h1>Redux :- 1</h1> */}
        <Todo />
        <h1>Redux :- 1.1</h1>
        <Count />
      </div>
    </Provider>
  );
}
