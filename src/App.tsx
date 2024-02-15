import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardLayout from "./components/DashboardLayout";
import DashboaardPage from "./pages/dashboardPages/DashboaardPage";
import PetprofilePage from "./pages/dashboardPages/PetprofilePage";

const App = () => {
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
