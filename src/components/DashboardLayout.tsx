import React from "react";
import Header from "./dasboard/Header";
import Siderbar from "./dasboard/Siderbar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../Redux/slice/themeSlice";

const DashboardLayout = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    if (theme?.theme === "Dark") {
      dispatch(setTheme({ theme: "Light" }));
    } else {
      dispatch(setTheme({ theme: "Dark" }));
    }
  };

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
