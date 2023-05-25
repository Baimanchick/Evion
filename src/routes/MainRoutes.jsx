import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../components/HomePage";
import PrvacyPage from "../pages/PrvacyPage";
import NotFounedPage from "../pages/NotFounedPage";
import AdminPage from "../pages/AdminPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/prvacy" element={<PrvacyPage />} />
      <Route path="*" element={<NotFounedPage />} />
      <Route path="/admin" element={<AdminPage/>}></Route>
    </Routes>
  );
}

export default MainRoutes;
