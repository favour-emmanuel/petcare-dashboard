import React from "react";
import logo from "../../assets/logo.svg";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";
import { TbVaccine } from "react-icons/tb";
import { BsChatSquareText } from "react-icons/bs";
import { MdOutlineCalendarMonth } from "react-icons/md";
import chatLogo from "../../assets/chatheads-icons.svg";
import { TbSettings2 } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";

const Siderbar = () => {
  return (
    <div className="bg-apppureWhite border-r border-r-[#DAE3F8] pt-2 px-8 w-full max-w-[17rem]">
      <div className="flex items-center gap-3 pt-8">
        <img src={logo} alt="logo" />
        <h1 className="font-medium text-base">PetCare.</h1>
      </div>
      {/* menu */}
      <ul className="pt-8 border-b">
        <h3 className="ul__label">menu</h3>
        <li className="bg-appBlue text-white py-2.5 px-3 w-[13rem] flex items-center rounded-md gap-5 text-sm my-2">
          <LuLayoutDashboard />
          Dashboard
        </li>
        <li className="side__list mb-5 mt-1">
          <MdOutlinePets />
          petprofile
        </li>
      </ul>
      {/* analytics */}
      <ul className="pt-4 border-b">
        <h3 className="ul__label">analytics</h3>
        <li className="side__list mt-1">
          <TbHealthRecognition />
          Health Monitoring
        </li>
        <li className="side__list mb-5 mt-1">
          <TbVaccine />
          Vaccination Schedule
        </li>
      </ul>
      {/* schedule */}
      <ul className="pt-4 border-b">
        <h3 className="ul__label">Schedule</h3>
        <div className="flex justify-between">
          <li className="side__list">
            <BsChatSquareText className="" />
            Chat
          </li>
          <img src={chatLogo} alt="chat logo" />
        </div>
        <div className="flex justify-between mt-1.5">
          <li className="side__list mb-5">
            <MdOutlineCalendarMonth className="" />
            Appointments
          </li>
          <div>
            <button className="bg-appRed px-2 rounded-md py-[0.2rem] text-sm text-white">
              2
            </button>
          </div>
        </div>
      </ul>
      <ul className="pt-4 border-b">
        <h3 className="ul__label">Help</h3>
        <li className="side__list mt-1">
          <TbSettings2 />
          Settings
        </li>
        <li className="side__list mb-5 mt-1">
          <HiOutlineDocumentText />
          Documentation
        </li>
      </ul>
    </div>
  );
};

export default Siderbar;
