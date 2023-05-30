import React from "react";
import Logo from "../data/meme-logo.png";
import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { BsArrowRightShort } from "react-icons";

const Nav = () => {
  /* Functionality */

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /* Tailwind jsx */
  return (
    <div className="">
      <nav class="px-2 sm:py-0 py-2 sm:px-4 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto shadow-sm shadow-black">
          {/* logo */}
          <a href="#" class="flex items-center">
            <img
              src={Logo}
              width={70}
              className="md:w-16 w-12"
              alt="Flowbite Logo"
            />
          </a>
          <div class="flex md:order-2">
            {/* responsive button */}
            <button
              onMouseDown={toggleMenu}
              id="btn"
              data-dropdown-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="true">
              <span class="sr-only">Open main menu</span>
              <CgMenuRightAlt className="text-4xl" />
            </button>
          </div>

          {/* List MENU'S */}
        </div>

        {/* OKAY */}

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } flex justify-end items-center w-full rounded-xl`}
          id="navbar-sticky">
          <ul
            role={"none"}
            class="flex flex-col p-4 w-1/6 bg-red-100 text-left md:mt-10 md:order-1 md:w-52 mt-4 border border-gray-100 rounded-lg md:flex-col md:text-sm md:font-normal md:tracking-wider md:border-0 ">
            <li>
              {/* about */}
              <a
                href="#about"
                class="block py-2 pr-4 duration-300 md:text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:py-2 ">
                Home
              </a>
            </li>
            <li>
              {/* jobs */}
              <a
                href="#jobs"
                class="block py-2 pr-4 duration-300 md:text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:py-2 ">
                Help
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
