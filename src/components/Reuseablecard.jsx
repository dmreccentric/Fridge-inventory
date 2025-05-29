import React from "react";

const Reuseablecard = ({ foodIcon, title, desc, primary, time }) => {
  if (primary) {
    return (
      <div className="bg-[#f7f7f7] rounded-[30px] mx-4">
        <div className="px-10 p-4 flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="w- h- ">{foodIcon}</div>
            <div className="flex flex-col">
              <h3 className="font-semibold capitalize">{title}</h3>
              <h4 className="capitalize text-gray-300">{desc}</h4>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            {primary} {time}
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="bg-[#f7f7f7] rounded-[30px] mx-5">
        <div className="px-10 p-4 flex justify-between">
          <div className="flex gap-2 items-center">
            <div className="w- h- ">{foodIcon}</div>
            <div className="flex flex-col">
              <h3 className="font-semibold capitalize">{title}</h3>
              <h4 className="capitalize text-gray-300">{desc}</h4>
            </div>
          </div>
          <div className="flex gap-3 items-center">{time}</div>
        </div>
      </div>
    );
};

export default Reuseablecard;
