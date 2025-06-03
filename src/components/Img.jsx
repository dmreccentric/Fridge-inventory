import React from "react";

const Img = ({ img, title }) => {
  return (
    <div className="flex flex-col  items-center">
      <img
        src={img}
        alt={title}
        className="h-[12rem] w-[12rem] rounded-full border-blue-500 border-1"
      />
      <p className="font-medium text-[20px] uppercase">{title}</p>
    </div>
  );
};

export default Img;
