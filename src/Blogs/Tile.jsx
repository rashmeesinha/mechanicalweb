
import "./Blogs.css"
import React from "react";

function Tile(props) {
  return (
    <>
      <p>
        Q{props.index + 1}. {props.item.ques}
      </p>
      <pre className="blog_tile">{props.item.ans}</pre>
    </>
  );
}

export default Tile;
