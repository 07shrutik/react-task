import * as React from "react";
// import "./style.css";
// import Todo from "./Todo";
import { Provider } from "react-redux";
import { store } from "./Slic";
import Count from "./Count";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Count />
      </div>
    </Provider>
  );
}
