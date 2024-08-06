import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" bottom-0 left-0 right-0 text-center text-white mainColor">
        <div className="container  py-8 md:py-24">
          <div className="row flex-col  md:flex-row items-center justify-evenly ">
            <div className="w-full pb-12 md:w-1/3 md:pb-0 ">
              <h2 className="py-2 text-3xl font-semibold">LOCATION</h2>
              <span>
                2215 John Daniel Drive <br /> Clark, MO 65243
              </span>
            </div>
            <div className="w-full pb-12 md:w-1/3 md:pb-0 ">
              <h2 className=" text-3xl font-semibold">AROUND THE WEB</h2>
              <div className="icons flex gap-5 items-center justify-center pt-3">
                <div className="border border-solid border-1 rounded-full w-9"><i class="fa-brands fa-facebook py-3 text-xl icon border-white border-solid"></i></div>
                <div className="border border-solid border-1 rounded-full w-9"><i class="fa-brands fa-twitter py-3 text-xl icon border-white border-solid"></i></div>
                <div className="border border-solid border-1 rounded-full w-9"><i class="fa-brands fa-linkedin py-3 text-xl icon border-white border-solid"></i></div>
                <div className="border border-solid border-1 rounded-full w-9"><i class="fa-solid fa-globe py-3 text-xl icon border-white border-solid"></i></div>
              </div>
            </div>
            <div className="w-full pb-12 md:w-1/3 md:pb-0 ">
              <h2 className=" text-3xl font-semibold">ABOUT FREELANCER</h2>
              <p className="py-2">
                Freelance is a free to use, licensed Bootstrap <br /> theme
                created by Route
              </p>
            </div>
          </div>
        </div>
        <div className="py-5 bg-[#1A252F]">
          <h3>Copyright © Ezz Website 2024</h3>
        </div>
      </div>
    </>
  );
}
