import React, { useState } from "react";
import img1 from "./../../assets/images/poert1.png";
import img2 from "./../../assets/images/port2.png";
import img3 from "./../../assets/images/port3.png";

export default function Portfolio() {
  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(false);

  function getSrc(e) {
    const src = e.currentTarget.querySelector("img").src;
    setImgSrc(src);
    setVisible(true);
  }

  function close() {
    setVisible(false);
  }

  return (
    <>
      <div className="container text-center  pt-20 md:pt-0">
        <div className=" flex flex-col items-center pt-12 ">
          <h2 className="py-5 pt-24 text-[#2C3E50] text-4xl font-sans font-extrabold">
            PORTFOLIO COMPONENT
          </h2>
          <div className="icons flex gap-3 items-center justify-center pb-2 ">
            <div className="w-20 h-1 mainColor"></div>
            <div>
              <i className="fa-solid fa-star text-[#2C3E50] mb-3"></i>
            </div>
            <div className="w-20 h-1 mainColor"></div>
          </div>
        </div>




        <div className="row  py-5 pb-11  px-8 flex items-center justify-center  ">
          <div className="item w-full md:w-4/12 relative mb-7 " onClick={getSrc}>
            <img src={img1} className="rounded-2xl w-96 " alt="" />
            <div className="layer w-96 inset-0 right-9 bg-[#1ABC9C]/80 rounded-2xl absolute flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ">
              <i
                _ngcontent-xhd-c19=""
                className="text-white fa-solid fa-plus fa-6x"
              ></i>
            </div>
          </div>
          <div className="item w-full md:w-4/12 relative mb-7" onClick={getSrc}>
            <img src={img2} className="rounded-2xl w-96 " alt="" />
            <div className="layer w-96 inset-0 right-9 bg-[#1ABC9C]/80 rounded-2xl absolute flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ">
              <i
                _ngcontent-xhd-c19=""
                className="text-white fa-solid fa-plus fa-6x"
              ></i>
            </div>
          </div>
          <div className="item w-full md:w-4/12 relative mb-7" onClick={getSrc}>
            <img src={img3} className="rounded-2xl w-96 " alt="" />
            <div className="layer w-96 inset-0 right-9 bg-[#1ABC9C]/80 rounded-2xl absolute flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ">
              <i
                _ngcontent-xhd-c19=""
                className="text-white fa-solid fa-plus fa-6x"
              ></i>
            </div>
          </div>
          <div className="item w-full md:w-4/12 relative mb-7" onClick={getSrc}>
            <img src={img1} className="rounded-2xl w-96 " alt="" />
            <div className="layer w-96 inset-0 right-9 bg-[#1ABC9C]/80 rounded-2xl absolute flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ">
              <i
                _ngcontent-xhd-c19=""
                className="text-white fa-solid fa-plus fa-6x"
              ></i>
            </div>
          </div>
          <div className="item w-full md:w-4/12 relative mb-7" onClick={getSrc}>
            <img src={img2} className="rounded-2xl w-96 " alt="" />
            <div className="layer w-96 inset-0 right-9 bg-[#1ABC9C]/80 rounded-2xl absolute flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ">
              <i
                _ngcontent-xhd-c19=""
                className="text-white fa-solid fa-plus fa-6x"
              ></i>
            </div>
          </div>
          <div className="item w-full md:w-4/12 relative mb-7" onClick={getSrc}>
            <img src={img3} className="rounded-2xl w-96 " alt="" />
            <div className="layer w-96 inset-0 right-9 bg-[#1ABC9C]/80 rounded-2xl absolute flex items-center justify-center opacity-0 hover:opacity-100 duration-500 ">
              <i
                _ngcontent-xhd-c19=""
                className="text-white fa-solid fa-plus fa-6x"
              ></i>
            </div>
          </div>
        </div>
      </div>
      {visible && (
        <div
          className="imageLayer  z-40 inset-0 fixed flex justify-center items-center bg-blue-700/25 "
          onClick={close}
        >
          <img src={imgSrc} className=" w-4/5 md:w-5/12    pt-8" alt="" />
        </div>
      )}
    </>
  );
}
