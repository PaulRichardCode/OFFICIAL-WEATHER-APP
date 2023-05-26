import React, { useState } from "react";

const home = () => {
  const [display, setDisplay] = useState(true);

  function click(): any {
    setDisplay((play) => play !== play);
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-gray-500 ">
        <button onClick={click}>click me</button>
        <p>you click : {display}</p>
      </div>
    </div>
  );
};

export default home;
