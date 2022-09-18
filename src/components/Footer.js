import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import { BiMoviePlay } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";

import "./Footer.css";
const Footer = (props) => {
  return (
    <React.Fragment>
      <div className="footer">
        {/* <dic className="icon"> */}
        <div>
          <AiFillHome />
        </div>
        <div>
          <HiSearch />
        </div>
        <div>
          <BiMoviePlay />
        </div>
        <div>
          <AiFillHeart />
        </div>
        <div>
          <FaRegUserCircle />
        </div>
        {/* </dic> */}
      </div>
    </React.Fragment>
  );
};

export default Footer;
