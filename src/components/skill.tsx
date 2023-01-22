import React from "react";
import PropTypes, { InferProps } from "prop-types";

export default function Skill({
  logo,
  label,
}: InferProps<typeof Skill.propTypes>) {
  return (
    <div className="p-6 rounded-xl shadow-xl shadow-[#ff514d] justify-between hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          {logo}
        </div>
        <div className="flex flex-col items-center justify-center">
            <h3>{label}</h3>
        </div>
      </div>
    </div>
  );
}

Skill.propTypes = {
  label: PropTypes.string,
  logo: PropTypes.element,
};
