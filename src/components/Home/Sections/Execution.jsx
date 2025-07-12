import { images } from "../../../assets/images/assets";
import Branche from "../base/Branche";
import SectionContent from "../base/SectionContent";

const Execution = () => {
  const Branches = [
    {
      imageSRC: images.design,
      branche: "Design",
      content: (
        <p>
          We design with purpose — crafting visual systems, interfaces, and
          experiences that feel as good as they function.
          <br />
          <br />
          Whether it's a website, app, or identity, we focus on clarity,
          emotion, and the details that make all the difference.
        </p>
      ),
    },
    {
      imageSRC: images.dev,
      branche: "Dev",
      content: (
        <p>
          We build clean, scalable, and performant digital experiences — from
          responsive websites to custom web applications.
          <br />
          <br />
          Design and dev go hand in hand here — no handoffs, no surprises. Just
          seamless, creative engineering.
        </p>
      ),
      color: "text-white"
    },
    {
      imageSRC: images.branding,
      branche: "Branding",
      content: (
        <p className="font-gtLight text-xs">
          We create brands that stand for something — built on strategy, brought
          to life with story, and expressed through every touchpoint.
          <br />
          <br />
          Naming, identity, tone of voice, and visual language — we shape the
          brand from the inside out.
        </p>
      ),
    },
  ];

  return (
    <div className="space-y-[42px] w-full h-full">
      <SectionContent
        title="Execution"
        content="We turn creative intent into reality—translating design and strategy into tangible outcomes, and standing with you through every step of execution"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 w-full h-full">
        {Branches.map((brancheItem, index) => {
          return (
            <Branche
              key={index}
              imageSRC={brancheItem.imageSRC}
              content={brancheItem.content}
              branche={brancheItem.branche}
              color={brancheItem.color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Execution;
