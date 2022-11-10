import React from "react";
import ReactDOM from "react-dom";
import Counter from './Counter';
import LuigiClient from '@luigi-project/client';


import "./index.scss";

const App = () => (
  <div className="App">
    <Counter/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));