import React from "react";

export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center pt-28 md:pt-12 ">
        <h2 className="py-5 pt-24 text-[#2C3E50] text-4xl font-sans font-extrabold">
          CONTACT SECTION
        </h2>
      </div>
      <div className="icons flex gap-3 items-center justify-center pb-2 ">
        <div className="w-20 h-1 mainColor"></div>
        <div>
          <i className="fa-solid fa-star text-[#2C3E50] mb-3"></i>
        </div>
        <div className="w-20 h-1 mainColor"></div>
      </div>

      <div className="container px-5 pb-8">
        <form className="max-w-md mx-auto">
          <div className="relative z-0 w-full mb-5 pb-4 group">
            <input
              type="text"
              name="UserName"
              id="UserName"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-[#1ABC9C] appearance-none  focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="UserName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              UserName
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 pb-4 group">
            <input
              type="number"
              name="UserAge"
              id="UserAge"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-[#1ABC9C] appearance-none  focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="UserAge"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              UserAge
            </label>
          </div>

          <div class="relative z-0 w-full mb-5 pb-4 group">
            <input
              type="email"
              name="UserEmail"
              id="UserEmail"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-[#1ABC9C] appearance-none  focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="UserEmail"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              UserEmail
            </label>
          </div>

          <div class="relative z-0 w-full mb-5 pb-4 group">
            <input
              type="password"
              name="Password"
              id="Password"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-[#1ABC9C] appearance-none  focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="Password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            class="text-white bg-[#1ABC9C] hover:bg-[#35a992] focus:ring-4 focus:outline-none focus:bg-[#1ABC9C]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  text-center "
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
