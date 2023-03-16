import React from "react";


function Button(props) {
  return (
    <button
      style={{
        borderStyle: "solid",
        borderColor: props.border,
        color: props.color,
        backgroundColor: props.bgcolor,
        borderRadius: "30px",
        height: props.height,

        width: props.width,
        fontWeight: "bold",
        cursor:"pointer"
      }}
    >
      {props.children}
    </button>
  );
}

export default Button;
