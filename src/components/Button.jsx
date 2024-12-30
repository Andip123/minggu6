import React from "react";

const Button = ({ text, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${style}`}
    >
      {text}
    </button>
  );
};

export default Button;