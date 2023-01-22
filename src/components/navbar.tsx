import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHamburger, FaLinkedin, FaGithubAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100]">
      <div className="flex justify-between items-center w-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/navlogo.gif"
          alt="/"
          width="80"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Experience
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Work</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <svg width="0" height="0">
              <linearGradient
                id="pink-orange-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#ED009C" offset="0%" />
                <stop stopColor="#FF514D" offset="100%" />
              </linearGradient>
            </svg>
            <FaHamburger
              style={{ fill: "url(#pink-orange-gradient)" }}
              size={30}
            />
          </div>
        </div>
      </div>

      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
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
            <div onClick={handleNav} className="rounded-full shadow-lg shadow-[#101021] p-3 cursor-pointer">
              <IoMdClose color="#101021" />
            </div>
          </div>
          <div className="border-b border-[#101021] my-4">
            <p className="w-[85%] md:w=[90%] py-4 text-[#101021]">
              Let's build something legendary together
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="text-[#101021] py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="text-[#101021] py-4 text-sm">Experience</li>
              </Link>
              <Link href="/">
                <li className="text-[#101021] py-4 text-sm">Work</li>
              </Link>
              <Link href="/">
                <li className="text-[#101021] py-4 text-sm">Contact</li>
              </Link>
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
