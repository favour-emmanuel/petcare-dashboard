import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsQuestionOctagon } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { useSelector } from "react-redux";
import { selectTheme } from "../../Redux/slice/themeSlice";

const Header = () => {
  const theme = useSelector(selectTheme);

  return (
    <div
      className={`flex justify-between gap-10 items-center py-5 px-6 border-b borde-b-[#DAE3F8] ${
        theme?.theme === "Light" ? " bg-apppureWhite" : "bg-appBlack"
      }`}
    >
      <div className="w-full max-w-[20rem] flex gap-4 items-center px-4 py-2 rounded-md border border-[#DAE3F8]">
        <GoSearch className="text-xl text-appNavyGray" />
        <input
          type="search"
          placeholder="search"
          className="outline-none bg-transparent w-full text-sm"
        />
      </div>
      <div className="flex gap-7 items-center">
        <BsQuestionOctagon className="text-base text-appNavyGray cursor-pointer" />
        <IoNotificationsOutline className="text-base text-appNavyGray cursor-pointer" />
        <button className="bg-appBlue text-white py-2 px-3 text-sm  rounded-md">
          Add widgets
        </button>
      </div>
    </div>
  );
};

export default Header;
