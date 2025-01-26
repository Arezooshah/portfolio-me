import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectItems = ({ pic, title, Github,Demo}) => {
  return (
    <div
      // name="projects"
      className="flex flex-col gap-5 md:gap-10 p-5 md:p-10 rounded-3xl ring-1"
    >
      <img src={pic} className="rounded-3xl" />
      <div className="font-bold text-2xl text-gray-900 md:text-4xl">
        {title}
      </div>
      <div className="gap-2 space-x-5 grid grid-cols-2">
        <button className="lg:block md:hidden hover:bg-gray-800 p-2 md:p-4 rounded-full ring-1 md:w-32 text-xl :md:text-xl hover:text-white transition">
          {Github}
          
        </button>
        <button className="flex justify-center hover:bg-gray-800 p-3 md:p-4 rounded-full ring-1 md:w-32 text-xlx er:text-white transition">
         Demo{ Demo}
        </button>
      </div>
    </div>
  );
};

export default ProjectItems;
