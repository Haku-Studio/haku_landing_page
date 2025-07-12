import React from "react";
import Line from "../base/Line";

const Footer = () => {
  return (
    <div className=" px-5 lg:px-[7%]">
      <Line></Line>
      <div className="leading-[20.8px] text-[16px] flex flex-col md:flex-row md:justify-between items-center justify-center py-10 lg:pb-9 lg:pt-[18px] space-y-4 md:space-y-0">
        <p>Haku.Studio <span className=" opacity-30">©</span> 2025. All right reserved</p>
        <ul className="flex space-x-[18px]  ">
          <li>Instagram</li>
          <li>Tiktok</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
