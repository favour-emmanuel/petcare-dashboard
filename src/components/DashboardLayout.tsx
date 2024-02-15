import React from "react";
import Header from "./dasboard/Header";
import Siderbar from "./dasboard/Siderbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../Redux/slice/themeSlice";

const DashboardLayout = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`flex ${
        theme?.theme === "Light" ? "bg-[#faf2f7]" : "bg-[#0d0d0d]"
      }`}
    >
      <Siderbar />
      <div className="w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
