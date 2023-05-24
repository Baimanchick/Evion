import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../components/HomePage";
import PrvacyPage from "../pages/PrvacyPage";
import NotFounedPage from "../pages/NotFounedPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/prvacy" element={<PrvacyPage />} />
      <Route path="*" element={<NotFounedPage />} />
    </Routes>
  );
}

export default MainRoutes;
