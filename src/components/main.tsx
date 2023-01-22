import React from "react";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[700px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4">
            Hi, I'm <span className="text-[#ED009C]">Nicole</span>.
          </h1>
          <h1 className="py-2 text-[#7D98A1]">I love to build things.</h1>
          <p className="py-4 max-w-[70%] m-auto">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building solutions for clients at{" "}
            <span className="text-[#ED009C] font-bold hover:border-b">
                <a target="_blank" href='https://www.sep.com'>SEP</a>
            </span>
            .
          </p>
          <div className="flex items-center justify-between max-w-[600px] m-auto py-4">
                <div className="rounded-full shadow-lg shadow-[#ff514d] p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                  <FaLinkedin color="#ED009C" size={35} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#ff514d] p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                  <FaGithubAlt color="#ED009C" size={35} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#ff514d] p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                  <HiOutlineMail color="#ED009C" size={35} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#ff514d] p-6 cursor-pointer hover:scale-110 ease-in duration-400">
                  <BsFillPersonFill color="#ED009C" size={35} />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
