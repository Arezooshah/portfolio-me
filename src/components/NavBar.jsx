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
    activateMenu();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });
  }, []);

  const getClosest = (elem, selector) => {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  const activateMenu = () => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");

        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        var parent = getClosest(parent || immediateParent, ".parent-menu-item");

        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };
  // end scroll
  return (
    <div
      className={`${
        scroll ? " bg-white  border border-gray-200  " : "bg-transparent"
      } defaultscroll is-sticky
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
