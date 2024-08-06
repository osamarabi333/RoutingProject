import React from "react";

export default function About() {
  return (
    <>
      <div className="pt-28 bg-[#1ABC9C] ">
        <div className="container py-12 flex flex-col justify-center items-center">
          <h2 className="py-5 pt-24 text-white text-4xl font-sans font-extrabold">
            ABOUT COMPONENT
          </h2>
          <div className="icons flex gap-3 items-center justify-center pb-2 ">
            <div className="w-20 h-1 bg-white"></div>
            <div>
              <i className="fa-solid fa-star text-white mb-3"></i>
            </div>
            <div className="w-20 h-1 bg-white"></div>
          </div>

          
          <div className="flex-col  md:flex md:flex-row items-center justify-center gap-6 pb-24  text-white ">
            <div>
              <p className="py-8 md:py-0">
                Freelancer is a free bootstrap theme created by Route. The{" "}
                <br />
                download includes the complete source files including HTML,
                <br /> CSS, and JavaScript as well as optional SASS stylesheets
                for easy <br />
                customization.
              </p>
            </div>
            <div>
              <p>
                Freelancer is a free bootstrap theme created by Route. The{" "}
                <br />
                download includes the complete source files including HTML,
                <br /> CSS, and JavaScript as well as optional SASS stylesheets
                for easy <br />
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
