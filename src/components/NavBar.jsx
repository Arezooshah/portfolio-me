import React, { useEffect, useState } from "react";
import logo from "../assets/freepik/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
// import { Link } from "react-router-dom";
import Social from "./Social";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handelClick = () => setNav(!nav);

  // scroll
  const [isOpen, setIsOpen] = useState(true);

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  return (
    <div
      className={`${
        scroll ? " bg-white  border border-gray-200  " : "bg-transparent"
      } default scroll is-sticky
      z-[999] fixed flex justify-between items-center  px-4 w-full text-gray-700`}
    >
      <div className="mx-20">
        <img src={logo} alt="logo pic" style={{ width: "100px" }} />
      </div>
      {/* // menu */}
      <ul className="md:flex gap-10 hidden mx-20 font-bold">
        <li className="hover:text-red-700 transition hover:cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-red-700 transition hover:cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-red-700 transition hover:cursor-pointer">
          <Link to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-red-700 transition hover:cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>
            projects
          </Link>
        </li>
        <li className="hover:text-red-700 transition hover:cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handelClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobil menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute rounded-l-2xl duration-500 top-0 right-0 w-[50%] h-[700px] md:hidden  bg-orange-100  flex flex-col justify-center  items-center  text-slate-800"
        }
      >
        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          <Link onClick={handelClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          <Link onClick={handelClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          {" "}
          <Link onClick={handelClick} to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          <Link
            onClick={handelClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-orange-600 transition hover:cursor-pointer">
          {""}
          <Link onClick={handelClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <Social />
    </div>
  );
};

export default NavBar;
