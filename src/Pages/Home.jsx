// src/Pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { fooditems } from "../constants/fooditems";
import Reuseablecard from "../components/Reuseablecard";
import IconCtn from "../components/IconCtn";
import LoginBtn from "../components/LoginBtn";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import { FaExclamation } from "react-icons/fa6";

function Home() {
  return (
    <div className="font-bold text-[20px]">
      <div className="w-[12rem] ml-5 mt-[5rem] mb-16">
        <h1 className="font-bold capitalize text-[1.6rem] mb-3">
          stay organized with ease
        </h1>
        <p className="text-[13px] font-medium">
          Effortlessly track and manage your refrigerator inventory
        </p>
      </div>

      <div className="bg-[#f7f7f7] rounded-4xl mx-5">
        <div className="flex justify-between text-[15px] font-medium py-4 px-5">
          <p>Expiry countdown</p>
          <Link to={"/expiry"}>
            <h4 className="text-blue-600 capitalize">see all</h4>
          </Link>
        </div>
        <div className="mx-9 space-y-3">
          {fooditems.slice(0, 3).map((item, index) => (
            <Reuseablecard
              key={index}
              foodIcon={<IconCtn size stuff icon={item.foodicon} />}
              title={item.title}
              desc={item.description}
              primary={
                item.alert ? (
                  <IconCtn stuff size icon={<FaExclamation />} />
                ) : null
              }
              time={<IconCtn size icon={item.timeleft} stuff />}
              stuff
            />
          ))}
        </div>
        <div className="pt-6 pb-3 flex justify-center">
          <IconCtn stuff icon={<HiOutlineDotsHorizontal />} />
        </div>
      </div>
      <div className="mx-4 mt-16">
        <LoginBtn title={"Continue with email"} link={"/signup"} border />
        <div className="flex justify-between mt-10 items-center px-5">
          <div className="text-[14px] font-normal">
            <p className="text-[#d5cbcb] ">Or continue using</p>
            <p className="capitalize">apple ID, google</p>
          </div>
          <div className="flex gap-1">
            <IconCtn stuff icon={<FaApple />} />
            <IconCtn stuff icon={<FcGoogle />} />
            <IconCtn stuff icon={<BiDotsHorizontalRounded />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
