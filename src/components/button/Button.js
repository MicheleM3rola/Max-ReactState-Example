import React from "react";
import "../../App.css";

const Button = ({ clickToOpen, state }) => {
  return (
    <div className="btn">
      <button
        onClick={() => {
          clickToOpen(!state);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Button;
