import React from "react";
import Inputs from "../components/Inputs";
import LoginBtn from "../components/LoginBtn";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import IconCtn from "../components/IconCtn";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-4 my-8">
      <div>
        <Link to={"/"}>
          <IconCtn icon={<MdOutlineKeyboardArrowLeft />} />
        </Link>
      </div>
      <div className="mt-[11rem]">
        <h1 className="font-bold text-center text-[20px] mb-4">
          Create your account
        </h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const { email, username, password } = e.target;

            if (!email.value) return alert("Email is required!");
            if (!username.value) return alert("Username is required!");
            if (!password.value || password.value.length < 6)
              return alert("Password must be at least 6 characters long.");

            alert(`Signed up as: ${username.value}`);

            navigate("/login");
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
              type="text"
              name="username"
              autoComplete="username"
              placeholder="Username"
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
            title={"Sign Up"}
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
          Already have an account?{" "}
          <Link to={"/login"} className="text-black font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
