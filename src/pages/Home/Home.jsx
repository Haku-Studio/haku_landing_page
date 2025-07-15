import Header from "../../components/Home/Sections/Header";
import Execution from "../../components/Home/Sections/Execution";
import CreativeWork from "../../components/Home/Sections/CreativeWork";
import Team from "../../components/Home/Sections/Team";
import Line from "../../components/base/Line";

const Home = () => {
  const paddingInside = "px-5 lg:px-[10%]";

  return (
    <div className="flex flex-col lg:pt-[148px] w-full  ">
      <div className={paddingInside}>
        <Header />
        <Line />
      </div>

      <div className="pt-20 pb-28 space-y-[118px] ">
        <div className={paddingInside}>
          <Execution />
        </div>

        <CreativeWork />
      </div>

      <div className={paddingInside}>
        <Line />
      </div>

      <div className={`py-16 lg:pt-[105px] lg:pb-[167.41px] ${paddingInside}`}>
        <Team />
      </div>
    </div>
  );
};

export default Home;
