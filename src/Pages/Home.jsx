// src/Pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="font-bold capitalize text-[20px]">
      Hello from Home Pages
      <Link to={"/expiry"}>
        <h4 className="text-blue-600">see all</h4>
      </Link>
    </div>
  );
}

export default Home;
