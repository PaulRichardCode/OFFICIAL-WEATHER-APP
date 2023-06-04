import { log } from "console";
import React, { useEffect, useState } from "react";
import { CgClose, CgSearch, CgSmile } from "react-icons/cg";
import { FcSearch } from "react-icons/fc";

///BsSearch FcSearch HiOutlineArrowRightOnRectangle
// FcGallery GrGallery
//MdOutlineTextRotationNone

//FcHome CiHome
//

function Home() {
  const [openMeme, setOpenMeme] = useState(false);
  const [dataMeme, setDataMeme] = useState(null);

  const displayMeme = () => {
    setOpenMeme(!openMeme);
  };

  useEffect(() => {
    const fetchMemeData = async () => {
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const data = await response.json();
        setDataMeme(data);
      } catch (error) {
        console.log("error fetching meme data");
      }
    };

    fetchMemeData();
  }, []);

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
        {/* main edit  */}
        <div className="w-1/2 mt-5 h-5/6 translate-x-1/2 px-6 py-3 bg-white rounded-lg">
          {/* ***********dont touch btn********* */}
          <button className="relative -top-1 left-full" onClick={displayMeme}>
            <CgClose className="text-xl" />
          </button>
          {/* white area */}
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-center text-xl font-semibold">
              Select Generated Meme
            </h1>
            {/* *searchbar*/}
            <div className="flex mt-10 mb-5 h-10 items-center">
              <input
                type="search"
                placeholder="write text to search"
                name="search"
                id="search"
                className="py-2 border outline-none h-full px-3 border-blue-600"
              />
              <button className="bg-blue-600 h-full px-5 border-blue-600 border">
                <CgSearch className="text-white text-xl" />
              </button>
            </div>
            {/* API INTEGRATIONS */}
            <div className="flex w-full justify-start items-start">
              <div className="flex flex-col items-center w-48 h-auto my-5 bg-white-100">
                {dataMeme ? <div></div> : <div></div>}

                {/* <h1 className="text-center text-sm">drake hotline bling</h1>

                <button className="bg-blue-600 w-32 py-1 text-sm text-white rounded-md border-blue-600 border">
                  Use this image
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
