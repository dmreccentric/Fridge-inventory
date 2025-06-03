import React from "react";
import IconCtn from "./IconCtn";
import { FaAngleRight } from "react-icons/fa6";

const ProfileCard = ({ title, input }) => {
  return (
    <div className="flex justify-between mx-4 py-5 border-b-1 mt-3">
      <div>
        <h4 className="font-bold text-[15px] uppercase pb-[5px]">{title}</h4>
        <h6 className="text-[13px] capitalize">{input}</h6>
      </div>
      <FaAngleRight className="text-2xl" />
    </div>
  );
};

export default ProfileCard;
