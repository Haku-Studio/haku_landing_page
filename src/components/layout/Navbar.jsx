import { images } from "../../assets/images/assets.js";
// import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-4 lg:p-24 ">
      <div className="logo">
        <img src={images.logo} alt="" />
      </div>
      {/* <div className=""> */}
        <ul className="flex"> 
          <li className="">About</li>
          <li className="">Contact</li>
        </ul>
      {/* </div> */}
    </div>
  );
};

export default Navbar;