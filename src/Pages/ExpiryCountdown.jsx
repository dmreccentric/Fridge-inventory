import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { IoMdContact } from "react-icons/io";
import { PiDotsThree } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import { FaExclamation } from "react-icons/fa6";

import IconCtn from "../components/IconCtn";
import Reuseablecard from "../components/reuseablecard";
import { fooditems } from "../constants/fooditems";

const ExpiryCountdown = () => {
  return (
    <div>
      <div className="flex justify-between mt-4 mx-4">
        <Link to={"/"}>
          <IconCtn icon={<MdOutlineKeyboardArrowLeft />} />
        </Link>

        <div className="flex gap-3 ">
          <IconCtn icon={<CiClock2 />} />
          <IconCtn icon={<IoMdContact />} />
          <IconCtn icon={<PiDotsThree />} />
        </div>
      </div>

      <h2 className="font-bold capitalize  mt-[2rem] mb-[2rem] text-2xl pl-9">
        expiry countdown
      </h2>
      <div className="flex flex-col gap-3 mx-4">
        {fooditems.map((item, index) => (
          <Reuseablecard
            key={index}
            foodIcon={<IconCtn size icon={item.foodicon} />}
            title={item.title}
            desc={item.description}
            primary={
              item.alert ? <IconCtn size icon={<FaExclamation />} /> : null
            }
            time={<IconCtn size icon={item.timeleft} />}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="h-24 w-24 rounded-full bg-black flex justify-center items-center text-white text-3xl">
          <FiPlus />
        </div>
      </div>
    </div>
  );
};

export default ExpiryCountdown;
