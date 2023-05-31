import React, { useState } from "react";
import { CgClose, CgSearch, CgSmile } from "react-icons/cg";
import { FcSearch } from "react-icons/fc";

///BsSearch FcSearch HiOutlineArrowRightOnRectangle
// FcGallery GrGallery
//MdOutlineTextRotationNone

//FcHome CiHome
//

function Home() {
  const [openMeme, setOpenMeme] = useState(false);

  const displayMeme = () => {
    setOpenMeme(!openMeme);
  };

  return (
    <div className=" h-screen w-full flex flex-col items-center justify-center">
      <div className="text-black w-full relative">
        <div>
          <h1 className="text-4xl font-semibold  text-center">
            Meme Generator
          </h1>
          <p className="text-xl py-3 text-center">
            create a meme with <b>JPG</b>, <b>GIF</b>, or <b>PNG</b> images.{" "}
          </p>
          <p className="text-xl text-center">Edit your image and make a meme</p>
          <div className="flex items-center justify-center">
            <button
              className="px-6 py-3 border border-blue-600 rounded text-blue-600 my-8 flex items-center"
              onClick={displayMeme}>
              <span className="bg-blue-600 p-1 mr-2">
                <CgSmile className="text-white text-2xl" />{" "}
              </span>
              Select Meme Templete
            </button>
          </div>
        </div>
        {/* ONCLICK DISPLAY API INTEGRATION AND EDITION */}
      </div>
      {/* Open meme display onclick */}
      <div
        className={`${
          openMeme ? "block" : "hidden"
        } block absolute top-0 left-0 w-full h-full bg-gray-600/30`}>
        {/* main edit */}
        <div className="w-1/2 mt-5 h-5/6 translate-x-1/2 px-6 py-3 bg-white rounded-lg">
          {/* ***********dont touch********* */}
          <button className="relative -top-1 left-full" onClick={displayMeme}>
            <CgClose className="text-xl" />
          </button>
          {/* touch */}
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-center text-xl font-semibold">
              Select Generated Meme
            </h1>
            {/* *searchbar* */}
            <div className="flex mt-10 mb-5 h-10 items-center">
              <input
                type="search"
                placeholder="write text to search"
                name="search"
                id="search"
                className="py-2 border outline-none h-full px-3 border-blue-600"
              />
              <button className="bg-blue-600 h-full px-5">
                <CgSearch className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
