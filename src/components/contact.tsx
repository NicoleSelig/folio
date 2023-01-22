import Link from "next/link";
import React from "react";
import SectionLabel from "./sectionLabel";

export default function Contact() {
  return (
    <div id="contact" className="w-full h-screen text-center">
      <div className="max-w-[700px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <SectionLabel label="What's Next?" header="Let's Get In Touch" />
          <p className="py-4 max-w-[70%] m-auto">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button className="bg-transparent hover: bg-gradient-to-r from-[#ED009C] to-[#FF514D] font-semibold hover:text-[#EAD5E6] py-1.5 px-2.5 border border-[#ED009C] hover:border-transparent rounded">
            <Link href="mailto:me@nicoleselig.com">Say Hello</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
