import React from "react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FcGallery, FcHome } from "react-icons/fc";
import { IoIosChatboxes, IoIosHelpCircle } from "react-icons/io";
import { GrBeacon, GrGallery } from "react-icons/gr";

const Nav = () => {
  /* Functionality */

  const [isOpen, setIsOpen] = useState(false);

  const mouseClick = () => {
    setIsOpen(!isOpen);
  };

  const mouseEnter = () => {
    setIsOpen(true);
  };

  const mouseLeave = () => {
    setIsOpen(false);
  };

  /* Tailwind jsx */
  return (
    <div className="">
      <nav class="px-2 sm:py-0 py-2 sm:px-0 fixed w-full top-0 left-0 border-gray-200 dark:border-gray-600">
        <div class="flex flex-wrap items-center justify-between mx-auto shadow-lg ">
          {/* logo */}
          <a href="#" class="flex items-center">
            <img src={Logo} className="md:w-12 w-12 mr-2" alt="Flowbite Logo" />
          </a>
          <div class="flex md:order-2">
            {/* responsive button */}
            <button
              onMouseEnter={mouseEnter}
              onClick={mouseClick}
              id="btn"
              data-dropdown-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none  focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="true">
              <span class="sr-only">Open main menu</span>
              <CgMenuRightAlt className="text-4xl text-blue-600" />
            </button>
          </div>

          {/* List MENU'S */}
        </div>

        {/* OKAY */}

        <div
          onMouseLeave={mouseLeave}
          className={`${
            isOpen ? "block" : "hidden"
          } flex justify-end items-center w-full rounded-xl`}
          id="navbar-sticky">
          <ul
            role={"none"}
            class="flex flex-col bg-white p-4 w-full text-left md:mt-4 md:order-1 md:w-72 mt-4 border border-gray-100 rounded-lg md:flex-col md:text-sm md:font-normal md:tracking-wider md:border-0 ">
            <li>
              {/* about */}
              <a
                href="#"
                class="flex items-center justify-between py-2 pr-4 duration-300 md:text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:py-2 ">
                <span className="flex items-center">
                  <FcHome className="text-xl mx-2" /> Home
                </span>{" "}
                <span>&gt;</span>
              </a>
            </li>
            <li>
              {/* jobs */}
              <a
                href="#"
                class="flex items-center justify-between py-2 pr-4 duration-300 md:text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:py-2 ">
                <span className="flex items-center">
                  <FcGallery className="text-xl mx-2" /> Create Meme
                </span>{" "}
                <span>&gt;</span>
              </a>
            </li>
            <li>
              {/* jobs */}
              <a
                href="#jobs"
                class="flex items-center justify-between py-2 pr-4 duration-300 md:text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:py-2 ">
                <span className="flex items-center">
                  <IoIosChatboxes className="text-xl mx-2 text-yellow-500" />{" "}
                  Help
                </span>{" "}
                <span>&gt;</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
