import React from "react";
import ExprerienceItems from "./ExprerienceItems";
import PicTik from "../assets/freepik//tik.png";

// data
const Data = [
  { id: 1, pic: PicTik, title: "Html" },
  { id: 2, pic: PicTik, title: "Css" },
  { id: 3, pic: PicTik, title: "Tailwind" },
  { id: 4, pic: PicTik, title: "Javascript" },
  { id: 5, pic: PicTik, title: "Typescript" },
  { id: 6, pic: PicTik, title: "ReactJs" },
];

// dataBack

const dataBack = [
  { id: 1, pic: PicTik, title: "Nod.jd" },
  { id: 2, pic: PicTik, title: "Next" },
  { id: 3, pic: PicTik, title: "Nod.js" },
];
const Experience = () => {
  return (
    <div
      name="skill"
      className="gap-5 md:gap-10 p-5 md:p-32 text-center experience"
      // id="experience"
    >
      <div className="pt-2 text-gray-500 text-lg"> Explore my </div>
      <div className="py-5 font-bold text-5xl text-gray-900">Skills</div>
      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 py-10">
        {/* part front */}
        <div className="py-20 p-10 rounded-3xl ring-1">
          <div className="py-5 font-bold text-3xl text-gray-900">
            Frontend Development
          </div>
          <div className="gap-2 grid grid-cols-2 md:grid-cols-3 py-10">
            {/* map */}
            {Data.map((item, index) => (
              <ExprerienceItems
                pic={item.pic}
                // skill={item.title}
                key={index.id}
              >
                {item.title}
              </ExprerienceItems>
            ))}
          </div>
        </div>

        {/* part back */}

        <div className="py-20 p-10 rounded-3xl ring-1">
          <div className="py-5 font-bold text-3xl text-gray-900">
            Backend Development
          </div>
          <div className="gap-2 grid grid-cols-2 md:grid-cols-3 m-0 py-10">
            {/* map */}
            {dataBack.map((item, index) => (
              <ExprerienceItems
                pic={item.pic}
                // skill={item.title}
                key={index.id}
              >
                {item.title}
              </ExprerienceItems>
            ))}

            {/*end map */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
