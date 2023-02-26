import React from "react";
import ReactDOM from "react-dom";
import Cart from "./components/Cart";

import "./index.css";

const App = () => (
  <div>
    <Cart />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
