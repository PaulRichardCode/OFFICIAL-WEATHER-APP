import React, { useState } from "react";
import data from "../data/data";
import logo from "../logo.svg";

function Home() {
  return (
    <div className="bg-gray-600 h-screen w-full flex items-center justify-around">
      <div className="w-72 h96 bg-white flex flex-col justify-between items-center">
        <img src={logo} alt="logo" />
        <h1></h1>
      </div>
    </div>
  );
}

export default Home;
