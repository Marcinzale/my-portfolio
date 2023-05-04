import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/mz-logo.png";
import { Link } from "react-scroll";
import CV from "../assets/CV_Marcin_Zalewski.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 bg-blue-950 flex justify-between items-center px-4 text-gray-300 z-10">
      <img src={Logo} alt="Logo" className="w-20" />

      {/* Menu */}
      <nav className="navbar">
        <ul className="hidden md:flex">
          <li className="hover:text-pink-500 hover:underline underline-offset-8 decoration-2">
            <Link activeStyle={{color: 'rgb(236 72 153)'}} spy={true} to="home" smooth={true} duration={1000}>
              Home
            </Link>
          </li>

          <li className="hover:text-pink-500 hover:underline underline-offset-8 decoration-2">
            <Link activeStyle={{color: 'rgb(236 72 153)'}} spy={true} to="about" smooth={true} duration={1000}>
              About
            </Link>
          </li>

          <li className="hover:text-pink-500 hover:underline underline-offset-8 decoration-2">
            <Link activeStyle={{color: 'rgb(236 72 153)'}} spy={true} to="skills" smooth={true} duration={1000}>
              Skills
            </Link>
          </li>

          <li className="hover:text-pink-500 hover:underline underline-offset-8 decoration-2">
            <Link activeStyle={{color: 'rgb(236 72 153)'}} 
              to="work" 
              spy={true} 
              smooth={true} 
              duration={1000}
              >
              Work
            </Link>
          </li>

          <li className="hover:text-pink-500 hover:underline underline-offset-8 decoration-2">
            <Link activeStyle={{color: 'rgb(236 72 153)'}}
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger menu */}

      <div onClick={handleClick} className="md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu*/}
      
      <ul
        className={ 
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-blue-950 flex flex-col justify-center items-center"
        } 
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* SOCIAL ICONS */}

      <div className="hidden lg:flex fixed flex-col left-0 top-[35%]">
        <ul>
          <li className="w-40 h-12 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/marcinzale"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-40 h-12 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Marcinzale"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-40 h-12 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-600">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-gray-300"
            >
              E-mail <HiOutlineMail size={30} />
            </Link>
          </li>

          <li className="w-40 h-12 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-900">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={CV}
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
