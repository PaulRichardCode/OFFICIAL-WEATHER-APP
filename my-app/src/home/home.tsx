import React, { useState } from "react";
import data from "../data/data";
import logo from "../logo.svg";

function Home() {
  const [color, setColor] = useState("blue");

  function handleClick() {
    const changeCol = color === "blue" ? "red" : "black";
    setColor(changeCol);
  }

  const paint = {
    backgroundColor: color,
  };

  return (
    <div className="bg-gray-600 h-screen w-full flex items-center justify-around">
      <div className="w-72 h96 bg-white flex flex-col justify-between items-center">
        <img src={logo} alt="logo" />
        <button onClick={handleClick} style={paint} className="w-24 h-16">
          hey
        </button>
      </div>
    </div>
  );
}

export default Home;
