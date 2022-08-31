import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/MainPage/Main";
import Login from "../pages/LoginPage/Login";
import Edit from "../pages/EditPage/Edit";
import Detail from "../pages/DetailPage/Detail";
import Landing from "../pages/LandingPage/Landing";
import Admin from "../pages/AdminPage/Admin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
