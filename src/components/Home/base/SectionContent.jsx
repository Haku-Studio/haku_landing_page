import React from "react";

const SectionContent = ({title, content}) => {
  return (
    <div className=" leading-[23.4px] lg:pr-[56%] space-y-2">
      <h1 className="text-base leading-130%] tricking-[-0.5px]">{title} </h1>
      <p className="text-xs font-gtLight leading-[130%] text-gray-300">
        {content}
      </p>
    </div>
  );
};

export default SectionContent;
