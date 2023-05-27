import React, { useState } from "react";
import data from "../data/data";
import logo from "../logo.svg";

function Home() {
  return (
    <div className="bg-gray-600 h-screen w-full flex items-center justify-around">
      <div className="w-72 h-96 bg-gray-700 flex text-white flex-col justify-between items-center">
        <img src={logo} alt="logo" />
        <h1>country</h1>
        <button className="py-3 px-6 bg-red-800">sign up</button>
      </div>
    </div>
  );
}

export default Home;