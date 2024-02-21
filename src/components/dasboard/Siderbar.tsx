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
import { useSelector } from "react-redux";
import { selectTheme } from "../../Redux/slice/themeSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";

const Siderbar = () => {
  const theme = useSelector(selectTheme);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname === "/dashboard");

  const sidedata = {
    categories: [
      {
        title: "Menu",

        submenus: [
          {
            icon: <LuLayoutDashboard />,
            listItem: "Dashboard",
            path: "/dashboard",
            onClick: () => {},
          },
          {
            icon: <MdOutlinePets />,
            listItem: "petprofile",
            path: "/dashboard/petprofilepage",
            onClick: () => {},
          },
        ],
      },
    ],
  };

  const sidebarData = {
    categories: [
      {
        labelHeading: "menu",
        subMenus: [
          {
            icon: <LuLayoutDashboard />,
            listItem: "Dashboard",
            path: "/dashboard",
            labelHeading: "menu",
            onclick: () => {
              navigate("/dashboard");
            },
          },
          {
            icon: <MdOutlinePets />,
            listItem: "petprofile",
            path: "/dashboard/petprofilepage",
            onclick: () => {
              navigate("/dashboard/petprofilepage");
            },
          },
        ],
      },

      {
        labelHeading: "analytics",
        subMenus: [
          {
            icon: <TbHealthRecognition />,
            listItem: "Health Monitoring",
            path: "/dashboard/healthmonitoring",
            onclick: () => {
              navigate("/dashboard/healthmonitoring");
            },
          },
          {
            icon: <TbVaccine />,
            listItem: "Vaccination Schedule ",
            path: "",
            onclick: () => {},
          },
        ],
      },

      {
        labelHeading: "schedule",
        subMenus: [
          {
            icon: <BsChatSquareText />,
            listItem: "Chat ",
            path: "",
            onclick: () => {},
          },
          {
            icon: <MdOutlineCalendarMonth />,
            listItem: "Appointment ",
            path: "",
            onclick: () => {},
          },
        ],
      },
      {
        labelHeading: "help",
        subMenus: [
          {
            icon: <TbSettings2 />,
            listItem: "Settings ",
            path: "",
            onclick: () => {},
          },

          {
            icon: <HiOutlineDocumentText />,
            listItem: "Documentation ",
            path: "",
            onclick: () => {},
          },
        ],
      },
    ],
  };

  return (
    <div
      className={`border-r border-r-[#DAE3F8] pt-2 px-8 w-full max-w-[17rem] ${
        theme?.theme === "Light"
          ? "bg-apppureWhite "
          : "bg-appdarkModeBlack text-white"
      }`}
    >
      <div className="flex items-center gap-3 pt-8">
        <img src={logo} alt="logo" />
        <h1 className="font-medium text-base">PetCare.</h1>
      </div>
      {/* sidebar menu list */}
      <div className="pt-7">
        {sidebarData.categories.map((category) => {
          return (
            <div>
              <h3 className="ul__label">{category.labelHeading}</h3>
              <ul>
                {category.subMenus.map((submenu) => {
                  return (
                    <li
                      onClick={submenu.onclick}
                      className={`${
                        location.pathname === submenu.path
                          ? "bg-appBlue text-white"
                          : ""
                      } py-2.5 px-3 w-[13rem] flex items-center rounded-md gap-5 text-sm my-2 cursor-pointer text-appNavyGray`}
                    >
                      {submenu.icon} {submenu.listItem}
                    </li>
                  );
                })}
              </ul>
              <hr />
            </div>
          );
        })}
        <hr />
      </div>

      {/* schedule */}
      <ul className="pt-4 border-b">
        <h3 className="ul__label">Schedule</h3>
        <div className="flex justify-between">
          <img src={chatLogo} alt="chat logo" />
        </div>
        <div className="flex justify-between mt-1.5">
          <li className="side__list mb-5">
            <MdOutlineCalendarMonth />
            Appointments
          </li>
          <div>
            <button className="bg-appRed px-2 rounded-md py-[0.2rem] text-sm text-white">
              2
            </button>
          </div>
        </div>
      </ul>

      <div className="relative pt-10">
        <li className="side__list absolute text-appRed cursor-pointer">
          <IoLogOutOutline /> Log out
        </li>
      </div>
    </div>
  );
};

export default Siderbar;
