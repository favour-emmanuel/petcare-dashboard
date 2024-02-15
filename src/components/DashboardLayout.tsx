import React from "react";
import Header from "./dasboard/Header";
import Siderbar from "./dasboard/Siderbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className=" flex bg-[#f2f5fa]">
      <Siderbar />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
