import Header from "../../components/Home/Sections/Header";
import Execution from "../../components/Home/Sections/Execution";
import CreativeWork from "../../components/Home/Sections/CreativeWork";
import Team from "../../components/Home/Sections/Team";
import Line from "../../components/base/Line";

const Home = () => {
  return (
    <div className="flex flex-col px-5 lg:px-[7%] lg:pt-[148px]  ">
      <Header />
      <Line />

      <div className=" pt-20 pb-28 space-y-[118px] ">
        <Execution />
        <CreativeWork />
      </div>

      <Line />

      <div className=" py-16 lg:pt-[105px] lg:pb-[167.41px] ">
        <Team />
      </div>
    </div>
  );
};

export default Home;
