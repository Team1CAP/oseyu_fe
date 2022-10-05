import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/MainPage/Main";
import Login from "../pages/LoginPage/Login";
import Edit from "../pages/EditPage/Edit";
import Detail from "../pages/DetailPage/Detail";
import Landing from "../pages/LandingPage/Landing";
import Admin from "../pages/AdminPage/Admin";
import My from "../pages/MyPage/My";
import Recruit from "../pages/RecruitPage/Recruit";
import Callback from "../pages/LoginPage/Callback";

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
        <Route path="/my" element={<My />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
