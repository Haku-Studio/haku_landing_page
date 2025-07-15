import SectionContent from "../base/SectionContent";
import { images } from "../../../assets/images/assets";
import { useEffect, useState } from "react";

const teamList = [
  {
    name: "Christian Ludovic",
    role: "Founder, Web Developer and Product Designer",
    image: images.team[0],
  },
  {
    name: "Ulrich Zobel",
    role: "Co-Founder & Fullstack Engineer",
    image: images.team[1],
  },
  // Ajoute ici d'autres membres si besoin
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-switch toutes les 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 lg:space-y-[137px]">
      <SectionContent
        title="Small team. Big ideas. Real collaboration."
        content="We build with purpose and people first."
      />

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[103px] px-4 lg:pl-[5%]">
        {/* Image membre actif */}
        <div className="relative w-[340px] md:w-[404px] h-[340px] md:h-[464.59px] transition-all duration-700 ease-in-out flex-shrink-0">
          {teamList.map((member, idx) => (
            <div
              key={member.name}
              className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700
                ${
                  activeIndex === idx
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-95 z-0 pointer-events-none"
                }
              `}
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={images.haku}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Liste membres */}
        <div className="space-y-4 sm:space-y-6 w-full# w-fit">
          {teamList.map((member, idx) => (
            <div
              key={member.name}
              onClick={() => setActiveIndex(idx)}
              className={`space-y-2 cursor-pointer px-4 py-3 rounded-xl transition-all duration-400
                ${
                  activeIndex === idx
                    ? "bg-white/10 shadow-lg opacity-100"
                    : "opacity-40 hover:opacity-80"
                }
              `}
            >
              <h1 className="text-lg font-semibold">{member.name}</h1>
              <p className="text-sm opacity-80">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
