import React from "react";
import PropTypes, { InferProps } from "prop-types";

export default function SectionLabel({
  label,
  header,
}: InferProps<typeof SectionLabel.propTypes>) {
  return (
    <>
      <p className="text-xl tracking-widest uppercase text-[#ED009C]">
        {label}
      </p>
      <h2 className="py-4">{header}</h2>
    </>
  );
}

SectionLabel.propTypes = {
  label: PropTypes.string,
  header: PropTypes.string,
};
