import React from "react";
import "./button.css";

const Button = ({ name, icon, background, color, border }) => {
  return (
    <div
      className="button"
      style={{ background: background, color: color, border: border }}
    >
      {icon && icon}
      {name}
    </div>
  );
};

export default Button;
