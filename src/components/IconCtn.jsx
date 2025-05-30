import React from "react";

const IconCtn = ({ icon, size, stuff }) => {
  const textSizeClass = size ? `text-[13px] bg-white` : "text-2xl w-9 h-9";
  const bgcolor = stuff ? `bg-[#f7f7f7] ` : "bg-gray-100";
  return (
    <div
      className={`w-8 h-8 font-medium rounded-full  ${textSizeClass} ${bgcolor} flex justify-center items-center`}
    >
      {icon}
    </div>
  );
};

export default IconCtn;
