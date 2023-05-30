import React from "react";
import logo from "../data/glook.jpg";
import { BsEmojiLaughing } from "react-icons/bs";
///BsSearch FcSearch HiOutlineArrowRightOnRectangle
// FcGallery GrGallery
//MdOutlineTextRotationNone
//CgMenuRightAlt

function Home() {
  return (
    <div className="bg-gradient-to-b to-cyan-400 from-blue-600 h-screen w-full flex flex-col items-center justify-center">
      <div>
        <h1 className="text-2xl text-center"> Meme Generator</h1>
        <div className="max-w-xs">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex item-center justify-between py-1">
          <button className="py-4 px-6 rounded-md bg-slate-400">
            Download meme
          </button>
          {/* install react icons */}
          <button className="py-4 px-6 rounded-md bg-slate-400">Share</button>
        </div>
      </div>

      <footer>
        Powered by Paul Richard <BsEmojiLaughing />{" "}
      </footer>
    </div>
  );
}

export default Home;
