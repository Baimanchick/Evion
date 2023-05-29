import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../components/HomePage";
import PrvacyPage from "../pages/PrvacyPage";
import NotFounedPage from "../pages/NotFounedPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import ESGAbout from "../pages/ESGAbout";
import Faq from "../pages/Faq";
import ESGLayout from "../layout/ESGLayout";
import BlogPage from "../pages/BlogPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/prvacy" element={<PrvacyPage />} />
      <Route path="*" element={<NotFounedPage />} />
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route element={<ESGLayout/>}>
        <Route path='/about' element={<ESGAbout/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/blogs' element={<BlogPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
