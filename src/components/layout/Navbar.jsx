import { Link } from "react-router-dom";
import { images } from "../../assets/images/assets.js";
// import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 lg:px-[7%] py-8">
      <Link to='/' className="logo">
        <img src={images.logo} alt="" />
      </Link>
      {/* <div className=""> */}
        <ul className="flex gap-[18px] text-[14px]"> 
          <Link to='/about' className=" cursor-pointer">About</Link>
          <Link to='/contact' className=" cursor-pointer">Contact</Link>
        </ul>
      {/* </div> */}
    </div>
  );
};

export default Navbar;