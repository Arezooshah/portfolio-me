import React from "react";
import pic1 from "../assets/pic/p1.png";
import pic2 from "../assets/freepik/p2.png";
import pic3 from "../assets/freepik/hero1.png";
import pic4 from "../assets/freepik/p4.png";
import pic5 from "../assets/freepik/p5.png";
import pic6 from "../assets/freepik/p6.png";
import ProjectItems from "./ProjectItems";
import { Link } from "react-router-dom";
import { FaGithub,FaExternalLinkSquareAlt } from "react-icons/fa";

// data
const data = [
  {
    id: 1,
    pic: pic1,
    title: "Project One",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/Arezooshah/Website-MARFA"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
  },
  {
    id: 2,
    pic: pic2,
    title: "Project Two",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/Arezooshah/Panel-Admin-MARFA"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
   
  },
  {
    id: 3,
    pic: pic3,
    title: "Project Three",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/Arezooshah/App-search"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
    Demo:(
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://programming-company.netlify.app/"
        target="_blank"
      >
                <FaExternalLinkSquareAlt size={30} />
      </Link>
    )
  },
  {
    id: 4,
    pic: pic4,
    title: "Project Four",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/Arezooshah/Game-hub"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
  },


  {
    id: 5,
    pic: pic5,
    title: "Project Five",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/Arezooshah/example-of-the-Mediseh-site"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
  },
  {
    id: 6,
    pic: pic6,
    title: "Project Six",
    Github: (
      <Link
        className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
        to="https://github.com/Arezooshah/Sample-site-React"
        target="_blank"
      >
        Github
        <FaGithub size={30} />
      </Link>
    ),
    
  },

// {
//   id: 7,
//   pic: pic7,
//   title: "Project seven",
//   Github: (
//     <Link
//       className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
//       to="https://github.com/Arezooshah/App-search"
//       target="_blank"
//     >
//       Github
//       <FaGithub size={30} />
//     </Link>
//   ),
// },
//  {
//     id: 8,
//     pic: pic8,
//     title: "Project eight",
//     Github: (
//       <Link
//         className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
//         to="https://github.com/Arezooshah/App-search"
//         target="_blank"
//       >
//         Github
//         <FaGithub size={30} />
//       </Link>
//     ),
//   },
//   {
//     id: 9,
//     pic: pic9,
//     title: "Project nine",
//     Github: (
//       <Link
//         className="flex justify-around items-center w-full h-full text-gray-800 hover:text-white transition"
//         to="https://github.com/Arezooshah/App-search"
//         target="_blank"
//       >
//         Github
//         <FaGithub size={30} />
//       </Link>
//     ),
//   },
];

export default function Project() {
  return (
    <div name="projects" className="p-5 md:p-32 text-center">
      <div className="pt-2 text-gray-500 text-lg">Browse my recent</div>
      <div className="py-5 font-bold text-5xl text-gray-900">projects</div>
      <div className="gap-3 md:gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 p-10">
        {/* map */}
        {data.map((item, index) => (
          <ProjectItems
            pic={item.pic}
            title={item.title}
            Github={item.Github}
            Demo={item.Demo}
          />
        ))}
      </div>
    </div>
  );
}
