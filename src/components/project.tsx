import Link from "next/link";
import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

export default function Project({
  name,
  tech,
  image,
  externalLink,
  githubLink,
}: InferProps<typeof Project.propTypes>) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#FF514D] rounded p-4 group hover:bg-gradient-to-r from-[#ED009C] to-[#FF514D]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={image}
        alt="/"
        height={500}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-[#101021] tracking-wider text-center">
          {name}
        </h3>
        <p className="pb-4 pt-2 text-[#101021] text-center">{tech}</p>
        <div className="flex gap-6 justify-center items-center">
          <Link
            target="_blank"
            href={externalLink}
          >
            <FaExternalLinkAlt color="#101021" size={50} />
          </Link>
          <Link target="_blank" href={githubLink}>
            <FiGithub color="#101021" size={50} />
          </Link>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  tech: PropTypes.string,
  image: Image,
  externalLink: URL,
  githubLink: URL,
};
