import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./mainComponents/Header";
import DisplayCards from "./mainComponents/DisplayCards";

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayCards />
    </div>
  );
}

export default App;
