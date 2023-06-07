import React from "react";
import Home from "./home/home";
import Nav from "./nav/nav";
import { About } from "./components";

function App() {
  return (
    <div className="bg-gradient-to-b from-cyan-50 to-indigo-100 ">
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
