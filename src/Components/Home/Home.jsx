import React from "react";
import homeImage from "../../assets/images/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="pt-52  md:pt-28 bg-[#1ABC9C] ">
        <div className="flex flex-col justify-center items-center">
          <img
            src={homeImage}
            className="w-1/2 md:w-1/5"
            alt=""
          />
          <h2 className="py-5 text-white text-4xl font-sans font-extrabold">START FRAMEWORK</h2>
          <div className="icons flex gap-3 items-center justify-center pb-2 ">
            <div className="w-20 h-1 bg-white"></div>
            <div ><i className="fa-solid fa-star text-white mb-3"></i></div>
            <div className="w-20 h-1 bg-white"></div>
          </div>
          <p className="text-white pb-8">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
