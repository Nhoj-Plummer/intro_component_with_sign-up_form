"use client";
import React from "react";
import "./button.css";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="button_container">
      <button className="button_field">{text}</button>
    </div>
  );
};

export default Button;
