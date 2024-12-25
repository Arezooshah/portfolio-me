import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectItems = ({ pic, title, Github }) => {
  return (
    <div
      // name="projects"
      className="flex flex-col gap-5 md:gap-10 p-5 md:p-10 rounded-3xl ring-1"
    >
      <img src={pic} className="rounded-3xl" />
      <div className="font-bold text-2xl text-gray-900 md:text-4xl">
        {title}
      </div>
      <div className="space-x-5 grid grid-cols-2 px-10">
        <button className="hover:bg-gray-800 p-2 md:p-4 rounded-full ring-1 text-xl :md:text-xl hover:text-white transition">
          {Github}
        </button>
        <button className="hover:bg-gray-800 p-2 md:p-4 rounded-full ring-1 text-xl hover:text-white transition">
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectItems;
