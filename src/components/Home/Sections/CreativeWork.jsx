import React from "react";
import SectionContent from "../base/SectionContent";
import CustomCursor from "../../base/CustomCursor";
import HakuCarousel from "../base/Carousel/hakuCarousel";
import { items } from "../../../data/Projects.js";

const CreativeWork = () => {
  return (
    <div className=" space-y-12 h-full w-full overflow-hidden">
      <div className="px-5 lg:px-[10%]">
        <SectionContent
          title="Creative Work"
          content="We shape ideas into bold creative directions—defining the look, the voice, and the soul of standout brands"
        />
      </div>

      <HakuCarousel items={items} />
    </div>
  );
};

export default CreativeWork;
