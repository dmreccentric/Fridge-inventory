import React from "react";

const Inputs = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required
      className="p-4 px-5 border-black border-1 rounded-2xl text-black  placeholder:text-[17px]"
    />
  );
};

export default Inputs;
