import React from "react";

const Project = ({ imageSRC, content }) => {
  return (
    <div className="space-y-[23px]">
      <div className="">
        <img
          src={imageSRC}
          alt=""
          className=" w-full h-[342px]"
        />
      </div>
      <p className="font-gtLight text-xs">{content}</p>
    </div>
  );
};

export default Project;
