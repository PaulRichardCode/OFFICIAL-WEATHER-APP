import React from "react";
import { FcSearch } from "react-icons/fc";
///BsSearch FcSearch HiOutlineArrowRightOnRectangle
// FcGallery GrGallery
//MdOutlineTextRotationNone

//FcHome CiHome
//

function Home() {
  return (
    <div className="bg-gradient-to-b from-cyan-50 to-indigo-100 h-screen w-full flex flex-col items-center justify-center">
      <div>
        {" "}
        <label
          htmlFor="search"
          className="flex items-center px-5 py-1 bg-yellow-400 ">
          {" "}
          <input
            type="search"
            id="search"
            placeholder="Search Memes"
            className="bg-yellow-400 px-5 placeholder:text-blue-600 "
          />{" "}
          <FcSearch />
        </label>
      </div>
    </div>
  );
}

export default Home;
