import React from "react";

const SectionContent = ({title, content}) => {
  return (
    <div className=" leading-[23.4px] lg:pr-[56%] space-y-2">
      <h1 className="text-base">{title} </h1>
      <p className="text-xs font-gtLight">
        {content}
      </p>
    </div>
  );
};

export default SectionContent;
