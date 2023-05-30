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
import ContactsPage from "../pages/ContactsPage";
import BlogPage from "../pages/BlogPage";
import MessagesDetail from "../pages/MessagesDetail";
import AdminBlogPage from "../pages/AdminBlogPage";
import AdminBlogAddPage from "../pages/AdminBlogAddPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/prvacy" element={<PrvacyPage />} />
      <Route path="*" element={<NotFounedPage />} />
      <Route path="/admin" element={<AdminPage />}></Route>
      <Route path="/admin/blogs" element={<AdminBlogPage />}></Route>
      <Route path="/admin/blogs/add" element={<AdminBlogAddPage />}></Route>
      <Route path="/detail/:id" element={<MessagesDetail/>}></Route>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route element={<ESGLayout />}>
        <Route path="/about" element={<ESGAbout />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/blogs" element={<BlogPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Route>
    </Routes>
  );
}

export default MainRoutes;
