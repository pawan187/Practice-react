import React, { useState } from "react";
import "./styles.css";
import Home from "./components/Home";
export default function App() {
  const [text, setText] = useState("Pawan");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Home text={text} />
    </div>
  );
}
