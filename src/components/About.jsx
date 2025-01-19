import React from "react";
import PicProfile from "../assets/freepik/35.avif";
import git from "../assets/pic/git1.jfif";
import linkedin from "../assets/pic/link.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      className="items-center md:px-32 py-10 p-20 text-center about"
      id="about"
    >
      <div className="pt-2 text-gray-500 text-lg">Get to now</div>
      <div className="py-5 font-bold text-5xl text-gray-900">About me</div>
      <div className="flex md:flex-row flex-col md:justify-center md:items-center gap-5 md:gap-10 mx-32 py-10">
        <img
          src={PicProfile}
          className="mx-auto rounded-2xl w-[500px] md:h-[600px]"
          alt=""
        />
        {/* right */}
        <div className="flex flex-col justify-center gap-10 md:px-32 md:p-20">
          <div className="gap-5 grid grid-cols-1 lg:grid-cols-2">
            {/* left */}
            <div className="flex flex-col justify-center items-center gap-3 mx-20 p-10 rounded-lg ring-1 w-[100%]">
              {/* <img src={git} className="h-20" alt="" /> */}
              <Link
                className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
                to="https://github.com/Arezooshah"
                target="_blank"
              >
                <img src={git} className="hover:p-2 h-20" alt="" />
              </Link>
              <div className="font-bold text-3xl text-gray-900">Experience</div>
              <div className="font-semibold text-gray-600 text-xl">
                3 Years precedent
              </div>
              <div className="font-semibold text-gray-600 text-md">
                Frontend Development
              </div>
            </div>
             {/* right */}
            {/* <div className="flex flex-col justify-center items-center gap-3 p-10 rounded-lg ring-1">
             
              <Link
                to="http://linkedin.com/in/arezoo-shahabi"
                target="_blank"
                className="flex justify-around items-center"
                href=""
              >
                <img src={linkedin} className="hover:p-2 h-20" alt="" />
              </Link>
              <div className="font-bold text-3xl text-gray-900">Experience</div>
              <div className="font-semibold text-gray-600 text-xl">
                3 Years Diploma
              </div>
              <div className="font-semibold text-gray-600 text-md">
                Frontend Development
              </div>
            </div> */}
          </div>
              <div className="w-[90%] text-2xl text-gray-600 text-start md:w[900px]">
            Im arezoo shahabi. I have been working as a programmer for three
            years. I worked in react and typescript, tailwind project. I would
            like to work with a stronger and more professional team. Remote work
            is my first priority. Good luck to everyone
          </div>
          
        </div>
     
      </div>
    </div>
  );
}

export default About;
