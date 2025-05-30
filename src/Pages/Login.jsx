import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import IconCtn from "../components/IconCtn";
import Inputs from "../components/Inputs";
import LoginBtn from "../components/LoginBtn";

const Login = () => {
  return (
    <div className="mx-4 my-8">
      <div>
        <Link to={"/signup"}>
          <IconCtn icon={<MdOutlineKeyboardArrowLeft />} />
        </Link>
      </div>
      <div className="mt-[11rem]">
        <h1 className="font-bold text-center text-[20px] mb-4">Login</h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const { email, password } = e.target;

            if (!email.value) return alert("Email is required!");

            if (!password.value || password.value.length < 6)
              return alert("Password must be at least 6 characters long.");

            alert(`Logged in as: ${username.value}`);

            navigate("/");
          }}
        >
          <div className="flex flex-col gap-4 mb-10">
            <Inputs
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
            />

            <Inputs
              type="password"
              name="password"
              autoComplete="new-password"
              placeholder="Password"
            />
          </div>
          <LoginBtn
            type={"submit"}
            title={"Log in"}
            text
            height
            // link={"/login"}
          />
        </form>
        <div className="text-[#bbb2b2] text-[15px] flex flex-col items-center mt-10">
          <p>By Continuing, i accept the</p>
          <p>
            <span className="text-black underline mr-1">Terms of use</span>and{" "}
            <span className="text-black underline">Privacy Policy</span>
          </p>
        </div>
      </div>
      <div className="text-[#bbb2b2] text-[17px] text-center mt-[10rem]">
        <p>
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-black font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
