import Image from "next/image";
import logoImg from "@/assets/logo.png";

import Link from "next/link";
import { MdOutlineAccessTime, MdOutlineHome } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import Mynavlink from "./Mynavlink";

const Navbar = () => {
  const links =  [
  { path: "/", text: "Home", icon: <MdOutlineHome /> },
  { path: "/timeline", text: "Timeline", icon: <MdOutlineAccessTime /> },
  { path: "/stats", icon: <IoMdStats />, text: "Stats" },
];
  return (

    


    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links.map((linkNav, index) => (
            
            <Mynavlink key={index} href={linkNav.path}>
              {linkNav.icon}
              {linkNav.text}
            </Mynavlink>
           
          ))}
      </ul>
    </div>
      <Image
          src={logoImg}
          alt="PH play store logo"
           width={150}
            height={50}
        />
    
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal gap-4 px-1">
      
      {links.map((linkNav, index) => (
           
            <Mynavlink key={index} href={linkNav.path}> {linkNav.icon}
              {linkNav.text}
            </Mynavlink>
          ))}

    </ul>
  </div>
 
</div>
  );
};

export default Navbar;
