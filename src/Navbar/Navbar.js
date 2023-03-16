import React from "react";
import { useState } from "react";

import Button from "../CustomElements/Button";

import "./Navbar.css";
import LogoWhite from "./whiteLogo.png";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="navLeft">
        {" "}
        <img src={LogoWhite} alt="mechanical web"></img>
      </div>
      <div className="navRight" id={showLinks ? "hidden" : ""}>
        {" "}
        {/* links */}
        <span>About Us</span>
        <span>What we do?</span>
        <span>Templates</span>
        <span>Blogs</span>
        <span>Contact Us</span>{" "}
        <div style={{ marginBottom: "20px", marginLeft: "10px" }}>
          <Button
            color="#883d1a"
            bgcolor="white"
            height="40px"
            width="100px"
            border="white"
          >
            Sign In
          </Button>
        </div>
      </div>
      <div className="hamburger" onClick={() => setShowLinks(!showLinks)}>
        {" "}
        {/*/hamburger button*/}
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
