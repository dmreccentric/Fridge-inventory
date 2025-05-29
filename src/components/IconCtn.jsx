import React from "react";

const IconCtn = ({ icon, size }) => {
  const textSizeClass = size ? `text-[13px] bg-white` : "text-2xl w-9 h-9";

  return (
    <div
      className={`w-8 h-8 font-medium rounded-full bg-gray-100 ${textSizeClass} flex justify-center items-center`}
    >
      {icon}
    </div>
  );
};

export default IconCtn;
