import React from "react";
import "./Blogs.css";
import bundleArray from "./bundleArray";
import Tile from "./Tile"

function Blogs() {
  return (
    <div className="blogs__main_container">
      <div className="blogs__container">
        <h1>Important JS Interview coding questions</h1>
        {bundleArray &&
          bundleArray.map((item, index) => {
            return (
              <Tile item={item} index={index}></Tile>
            );
          })}
      </div>
    </div>
  );
}

export default Blogs;
