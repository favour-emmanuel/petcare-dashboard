import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./components/DashboardLayout";
import DashboaardPage from "./pages/dashboardPages/DashboaardPage";
import PetprofilePage from "./pages/dashboardPages/PetprofilePage";
import { useDispatch } from "react-redux";
import { setTheme } from "./Redux/slice/themeSlice";
import { Theme } from "./types";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const theme = localStorage.getItem("myapptheme");
    if (theme) {
      //@ts-ignore
      dispatch(setTheme({ theme: theme }));
    } else {
      dispatch(setTheme({ theme: "Light" }));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route
              path="/dashboard/dashboardpages"
              element={<DashboaardPage />}
            />
            <Route
              path="/dashboard/petprofilepage"
              element={<PetprofilePage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
