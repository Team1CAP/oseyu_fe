import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/MainPage/Main";
import Login from "../pages/LoginPage/Login";
import Edit from "../pages/EditPage/Edit";
import Detail from "../pages/DetailPage/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
