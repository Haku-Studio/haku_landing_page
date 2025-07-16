import React from "react";

const Branche = ({ branche, content, imageSRC, color }) => {
  return (
    <div className="space-y-[23px]">
      <div className=" relative">
        <img src={imageSRC} alt="" className=" w-full h-[547px] object-cover" />
        <p className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center space-x-3 ">
          {" "}
          <span  
            className={`h-[50px] w-[50px] rounded-full`}
            style={{
              background : color
            }}
          >
          </span>{" "}
          <span
            className="font-gtBold text-xl"
            style={{
              color: color
            }}
          >
            {" "}
            {branche}{" "}
          </span>{" "}
        </p>
      </div>

      {content}
    </div>
  );
};

export default Branche;
