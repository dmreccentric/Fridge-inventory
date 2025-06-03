import React from "react";
import IconCtn from "../components/IconCtn";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Img from "../components/Img";
import ProfileCard from "../components/ProfileCard";

const Profile = () => {
  const data = [
    { input: "emmanuel chigozie", title: "name" },
    { input: "eccentricecc481@gmail.com", title: "email" },
    { input: "software engineer", title: "title" },
    { input: "san francisco, CA", title: "location" },
  ];

  return (
    <div>
      <div className="flex justify-between mx-4 mt-10">
        <Link to={"/signup"}>
          <IconCtn icon={<MdOutlineKeyboardArrowLeft />} />
        </Link>
        <p className="text-[22px] text-blue-600 capitalize font-semibold">
          Save
        </p>
      </div>
      <p
        className="capitalize font-bold
      text-[25px] mt-7 ml-4"
      >
        edit profile
      </p>
      <div className="h-[18rem] bg-[#ececec99] flex justify-center items-end pb-2">
        <Img
          title={"profile Photo"}
          img={
            "https://res.cloudinary.com/dzhhpr7f1/image/upload/v1748971757/IMG_2622_yygpww.jpg"
          }
        />
      </div>
      <div>
        {data.map((data, index) => (
          <ProfileCard key={index} title={data.title} input={data.input} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
