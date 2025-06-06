import React from "react";
import { Link } from "react-router-dom";

const IconCtn = ({ icon, size, stuff, link, dark }) => {
  const textSizeClass = size ? `text-[13px] bg-white` : "text-2xl w-9 h-9";
  const bgcolor = stuff ? `bg-[#f7f7f7] ` : "";
  const bgcolor2 = dark ? `bg-white ` : "bg-gray-100";

  if (link)
    return (
      <Link to={link}>
        <div
          className={`w-8 h-8 font-medium rounded-full  ${textSizeClass} ${bgcolor} ${bgcolor2} flex justify-center items-center`}
        >
          {icon}
        </div>
      </Link>
    );
  else
    return (
      <div
        className={`w-8 h-8 font-medium rounded-full  ${textSizeClass} ${bgcolor} ${bgcolor2} flex justify-center items-center`}
      >
        {icon}
      </div>
    );
};

export default IconCtn;
