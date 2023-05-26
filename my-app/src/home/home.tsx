import React, { useState } from "react";

const home = () => {
  const [display, setDisplay] = useState(true);

  setDisplay((play: boolean): any => {
    if (play === true) {
      return <p>you lied</p>;
    }
  });

  function click() {}
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-gray-500">
        <button>click me</button>
        <p>{display}</p>
      </div>
    </div>
  );
};

export default home;
