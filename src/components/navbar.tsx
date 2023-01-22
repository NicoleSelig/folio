import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHamburger, FaLinkedin, FaGithubAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import Gradient from "./gradient";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100] bg-[#101021]">
      <div className="flex justify-between items-center w-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navlogo.gif"
          alt="/"
          width="80"
          height="50"
        />
        <div>
          <ul className="hidden md:flex items-center">
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            {/* <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Experience
              </li>
            </Link> */}
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <li className="ml-10">
              <button className="bg-transparent hover: bg-gradient-to-r from-[#ED009C] to-[#FF514D] font-semibold hover:text-[#EAD5E6] py-1.5 px-2.5 border border-[#ED009C] hover:border-transparent rounded">
                Resume
              </button>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <Gradient />
            <FaHamburger
              style={{ fill: "url(#pink-orange-gradient)" }}
              size={30}
            />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-r from-[#ED009C] to-[#FF514D] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/navLogo.png"
              alt="/"
              width="55"
              height="50"
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-[#101021] p-3 cursor-pointer"
            >
              <IoMdClose color="#101021" />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/#about">
                <li className="text-[#101021] py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className="text-[#101021] py-4 text-sm">Skills</li>
              </Link>
              {/* <Link href="/#">
                <li className="text-[#101021] py-4 text-sm">Experience</li>
              </Link> */}
              <Link href="/#projects">
                <li className="text-[#101021] py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="text-[#101021] py-4 text-sm">Contact</li>
              </Link>
              <li className="text-[#101021] py-4 text-sm">
                <button className="bg-transparent hover: bg-gradient-to-r from-[#ED009C] to-[#FF514D] font-semibold hover:text-[#EAD5E6] py-2 px-4 border border-[#ED009C] hover:border-transparent rounded">
                  Resume
                </button>
              </li>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#101021]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[60%]">
                <div className="rounded-full shadow-lg shadow-[#101021] p-3 cursor-pointer hover:scale-105 ease-in duration-400">
                  <FaLinkedin color="#101021" size={35} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#101021] p-3 cursor-pointer hover:scale-105 ease-in duration-400">
                  <FaGithubAlt color="#101021" size={35} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#101021] p-3 cursor-pointer hover:scale-105 ease-in duration-400">
                  <HiOutlineMail color="#101021" size={35} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#101021] p-3 cursor-pointer hover:scale-105 ease-in duration-400">
                  <BsFillPersonFill color="#101021" size={35} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
