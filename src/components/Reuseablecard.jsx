import React from "react";

const Reuseablecard = ({ foodIcon, title, desc, primary, time, stuff }) => {
  const changestuff = stuff
    ? `bg-white rounded-[20px]`
    : "bg-[#f7f7f7] rounded-[30px] ";
  const thefont = stuff ? `text-[15px]` : "";
  const thefont2 = stuff ? `text-[13px]` : "";
  const thepadding = stuff ? `px-3 p-4` : "px-10 p-4";
  const thegap = stuff ? `gap-0` : "gap-3";
  if (primary) {
    return (
      <div className={`${changestuff} `}>
        <div className={`${thepadding} flex justify-between`}>
          <div className="flex gap-2 items-center">
            <div className="w- h- ">{foodIcon}</div>
            <div className="flex flex-col">
              <h3 className={`font-semibold capitalize ${thefont} `}>
                {title}
              </h3>
              <h4 className={`capitalize text-gray-300 ${thefont2}`}>{desc}</h4>
            </div>
          </div>
          <div className={`flex ${thegap} items-center`}>
            {primary} {time}
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className={`${changestuff} `}>
        <div className={`${thepadding} flex justify-between`}>
          <div className="flex gap-2 items-center">
            <div className="w- h- ">{foodIcon}</div>
            <div className="flex flex-col">
              <h3 className={`font-semibold capitalize ${thefont} `}>
                {title}
              </h3>
              <h4 className={`capitalize text-gray-300 ${thefont2}`}>{desc}</h4>
            </div>
          </div>
          <div className={`flex ${thegap} items-center`}>{time}</div>
        </div>
      </div>
    );
};

export default Reuseablecard;
