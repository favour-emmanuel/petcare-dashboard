import { IoNotificationsOutline } from "react-icons/io5";
import { BsQuestionOctagon } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../../Redux/slice/themeSlice";

const Header = () => {
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
      className={`flex justify-between gap-10 items-center py-5 px-6 border-b borde-b-[#DAE3F8] ${
        theme?.theme === "Light" ? " bg-apppureWhite border-[#CDD1D6]" : ""
      }`}
    >
      <div
        className={`w-full max-w-[22rem] flex gap-4 items-center px-4 py-2 rounded-md border border-[#DAE3F8] ${
          theme?.theme === "Dark" ? "text-apppureWhite border-[#CDD1D6]" : ""
        }`}
      >
        <GoSearch className="text-base" />
        <input
          type="search"
          placeholder="search"
          className="outline-none w-full bg-transparent text-sm"
        />
      </div>
      <div
        className={`flex gap-7 items-center ${
          theme?.theme === "Dark" ? "text-apppureWhite" : ""
        }`}
      >
        <button onClick={changeTheme} className="text-base ">
          {theme?.theme === "Light" ? <GoSun /> : <IoMoonOutline />}
        </button>
        <BsQuestionOctagon className="text-base cursor-pointer" />
        <IoNotificationsOutline className="text-base cursor-pointer" />
        <button className="bg-appBlue text-white py-2 px-3 text-sm  rounded-md">
          Add widgets
        </button>
      </div>
    </div>
  );
};

export default Header;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
