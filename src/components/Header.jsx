import React from "react";
import Pic1 from "../assets/freepik/4.jpg";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import Background from "../assets/freepik/bg1.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      name="home"
      className="relative grid grid-cols-1 lg:grid-cols-2 home"
    >
      <div
        style={{
          background: `url(${Background}) center center`,
          backgroundPosition: "center",
          backgroundSize: "700px",
          backgroundRepeat: "no-repeat",
        }}
        className="relative flex justify-center items-center p-20 md:p-32"
      >
        <div className="md:block top-52 md:top-40 z-50 hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 m-3 p-4 rounded-lg w-44 text-center hi md:-start-0 start-0">
          <h6 className="font-semibold">FrontEnd Developer</h6>
          <h6 className="mt-1 text-slate-400 text-sm">3+ Years Experience</h6>
        </div>
        <img
          src={Pic1}
          className="relative z-1 shadow-2xl rounded-full sm:h-[300px] md:h-[400px] lg:h-[500px] d-[200px"
          alt=""
        />
        <div className="md:block -bottom-10 lg:bottom-36 absolute hidden bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 m-3 p-4 rounded-lg w-44 text-center -end-0 md:-end-0">
          <span className="mb-0 font-medium text-3xl">
            <CountUp end={10} className="font-bold counter-value" />+
          </span>
          <h6 className="mt-1 text-slate-400 text-sm">Project Completed</h6>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 p-32">
        <div className="font-bold text-3xl text-gray-700">
          Hi, I'm
          {/* animtype */}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Arezoo Shahabi",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Freelancer",
              1000,
              "Website programer",
              1000,
              "Web Developers",
              1000,
              "FrontEnd Developer",
              1000,
            ]}
            wrapper="span"
            speed={10}
            className="ms-3 typewrite"
            repeat={Infinity}
          />
        </div>
        <div className="font-bold text-6xl text-gray-800">Arezoo Shahabi</div>
        <div className="font-bold text-3xl text-gray-700">
          Frontend Developer
        </div>
        <div className="flex gap-3">
          <button className="hover:bg-gray-900 px-6 p-4 rounded-full ring-1 hover:text-white transition">
            <Link
              // className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
              to="https://s32.picofile.com/d/8482225076/c73a6ce5-439d-419e-89a4-aa3de134e5cb/resume_arezoo_Shahabi.pdf"
              target="_blank"
            >
              Download CV
            </Link>
          </button>
          <button className="bg-gray-700 hover:bg-slate-900 px-6 p-4 border rounded-full text-white transition">
            <Link
              // className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
              to="mailto:arezooshahabi@gmail.com"
              target="_blank"
            >
              Contact info
            </Link>
          </button>
        </div>
        <div className="flex gap-2">
          <img className="h-10" src="public\gm.png" alt="" />
          <img
            className="rounded-3xl h-10"
            sizes=""
            src="public\link.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
