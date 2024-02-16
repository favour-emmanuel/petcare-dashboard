import React from "react";
import logo from "../assets/logo.svg";
import image from "../assets/red-white-cat-i-white-studio.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { GoUnlock } from "react-icons/go";
import { useForm } from "react-hook-form";
import Joi from "joi";
import ErrorMessage from "../components/ErrorMessage";
import { joiResolver } from "@hookform/resolvers/joi";
import { useNavigate } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "../Redux/slice/themeSlice";

interface Schema {
  email: string;
  password: string;
}

const schema = Joi.object<Schema>({
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

  email: Joi.string().email({ minDomainSegments: 2, tlds: {} }),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({ resolver: joiResolver(schema) });

  const navigate = useNavigate();
  const onsubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/dashboard");
  });

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
      className={`min-h-screen ${
        theme?.theme === "Light" ? "bg-apppureWhite" : "bg-[#262626]"
      }`}
    >
      <div className="pt-7 flex justify-center items-center gap-8 pb-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" />
          <h1
            className={`font-medium text-base ${
              theme?.theme === "Dark" ? "text-apppureWhite" : ""
            }`}
          >
            PetCare.
          </h1>
        </div>
        <div className="relative">
          <button
            onClick={changeTheme}
            className={`flex items-center text-xl ${
              theme?.theme === "Dark" ? "text-apppureWhite" : ""
            }`}
          >
            {theme?.theme === "Light" ? <GoSun /> : <IoMoonOutline />}
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center  ">
        <div className=" w-full max-w-[40rem] mx-auto flex  text-appwhite rounded-md">
          {/* input fields */}
          <form
            onSubmit={onsubmit}
            className={`w-full py-6 px-7 ${
              theme?.theme === "Light"
                ? "bg-appNavyGray"
                : "bg-appdarkModeBlack"
            }`}
          >
            <h1 className="pt-10 text-xl font-bold text-appwhite">Welcome !</h1>
            <div className="flex flex-col py-3">
              <label htmlFor="" className="py-1 text-sm">
                Email
              </label>
              <div className="flex gap-3 items-center w-full py-1.5  bg-apppureWhite px-3 rounded-sm mt-1">
                <MdOutlineEmail className="text-appNavyGray text-base" />
                <input
                  type="email"
                  placeholder="petcare@gmail.com"
                  className="w-full text-sm outline-none bg-transparent text-appBlack"
                  autoComplete="email"
                  id="email"
                  {...register("email")}
                />
              </div>
              <ErrorMessage message={errors?.email?.message ?? null} />
            </div>
            <div className="flex flex-col py-1">
              <label htmlFor="" className="py-1 text-sm">
                Enter Password
              </label>
              <div className="flex gap-3 items-center w-full py-1.5  bg-apppureWhite px-3 rounded-sm mt-1">
                <GoUnlock className="text-base text-appNavyGray" />
                <input
                  type="password"
                  placeholder="Minimun of 8 characters"
                  className="text-sm w-full outline-none bg-transparent text-appBlack"
                  id="password"
                  {...register("password")}
                />
              </div>
              <ErrorMessage message={errors?.password?.message ?? null} />
            </div>
            <div className="flex justify-center items-center mt-10">
              <button
                type="submit"
                className="bg-appBlue w-full  py-2  rounded-md"
              >
                Login
              </button>
            </div>
          </form>
          {/* image */}
          <div className="w-full max-w-[34rem] flex-1 relative rounded-md">
            <img src={image} className="max-w-[19rem]" alt="login image" />
            <div className="bg-[#00000011] top-0 w-full max-w-[19rem] absolute h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
