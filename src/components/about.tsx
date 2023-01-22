import React from "react";
import Image from "next/image";
import avatar from '../../public/assets/avatar-green.png'

export default function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[700px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#ED009C]">about</p>
          <h2 className="py-4">Hello!</h2>
          <p className="py-2 text-[#7D98A1]">// I am not your average software engineer</p>
          <p className="py-2">
            I spent the last 15 years in veterinary medicine as a Veterinary Technician and animal caretaker. However, I came to learn that
            I thrive at the intersection of art and science. My interest in software engineering started back in 2002
            when I decided to try editing custom Xanga themes — turns out
            hacking together a custom blog site taught me a lot about HTML &
            CSS! Fast-forward to today, and I’ve had the privilege of working with <span className="text-[#ED009C] font-bold hover:border-b">
                <a target="_blank" href='https://www.butler.edu/information-technology/help/'>a student-led IT team</a>
            </span> and participating in <span className="text-[#ED009C] font-bold hover:border-b">
                <a target="_blank" href='https://epics.butler.edu/'>engineering projects for community service</a>
            </span>. My main focus these days is building
            digital experiences at <span className="text-[#ED009C] font-bold hover:border-b">
                <a target="_blank" href='https://www.sep.com'>SEP</a>
            </span> for a variety of clients.
          </p>
          <p className="py-4 text-[#ED009C] font-bold hover:border-b">Check out some of my latest projects!</p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-[#ff514d] rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image
            src="/assets/avatar-green.png"
            alt="Me"
            width={500}
            height={500}
        />
        </div>
      </div>
    </div>
  );
}
