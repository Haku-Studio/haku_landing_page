import SectionContent from "../base/SectionContent";
import { images } from "../../../assets/images/assets";
import { useState } from "react";

const Team = () => {
  const [teamMember, setTeamMember] = useState(images.team[0]);

  return (
    <div className=" space-y-[137px]">
      <SectionContent
        title="Small team. Big ideas. Real collaboration."
        content="We build with purpose and people first."
      />

      <div className=" flex justify-center items-center space-x-[103px] pl-[5%]">
        <div
          className="relative w-[404px] h-[464.59px] transition-all "
          style={{
            backgroundImage: `url(${teamMember})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {" "}
          <img src={images.haku} alt="" className=" absolute bottom-0 " />{" "}
        </div>

        <div className=" space-y-6 transition-all">
          <div onClick={() => teamMember !== images.team[0] && setTeamMember(images.team[0])} className={`space-y-2 ${images.team[0] !== teamMember && 'opacity-40'}`}>
            <h1 className=" text-lg ">Christian Ludovic</h1>
            <p className=" text-sm opacity-80">
              Founder, Web Developer and Product Designer
            </p>
          </div>
          <div onClick={() => setTeamMember(images.team[1])} className={`space-y-2 ${images.team[0] === teamMember && 'opacity-40'}`}>
            <h1 className=" text-lg ">Ulrich Zobel</h1>
            <p className=" text-sm opacity-80">Co-Founder & Fullstack Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
