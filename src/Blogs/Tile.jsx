
import "./Blogs.css"
import React from "react";

function Tile(props) {

  const ans=props.item.ans
  const ques= props.item.ques
  const sol= props.item.sol

  return (
    <>
      <p>
        <b>Q{props.item.id}. {ques}</b>
      </p>
      {ans && <pre className="blog_tile">{ans}</pre>}
      {sol && <p className="blog_sol">{sol}</p>}
      
    </>
  );
}

export default Tile;
