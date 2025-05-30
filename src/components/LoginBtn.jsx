import React from "react";
import { Link } from "react-router-dom";

const LoginBtn = ({ title, border, height, link, text, type }) => {
  const theborder = border ? `rounded-full` : "rounded-lg";
  const btnheight = height ? `py-5` : "py-4";
  const textsize = text
    ? `text-[15px] font-semibold`
    : "text-[13px] font-light text-[13px]";

  if (link)
    return (
      <Link to={link}>
        <button
          type={type}
          className={`flex justify-between bg-black ${textsize}  text-white flex justify-center w-full ${theborder} ${btnheight}`}
        >
          {title}
        </button>
      </Link>
    );
  else
    return (
      <button
        type={type}
        className={`flex justify-between bg-black ${textsize}  text-white flex justify-center w-full ${theborder} ${btnheight}`}
      >
        {title}
      </button>
    );
};

export default LoginBtn;
