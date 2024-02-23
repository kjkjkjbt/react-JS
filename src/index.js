import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ChangeCar from "./components/HandleEvent/StateDemoComponent/ChangeCar";
import ChangeColour from "./components/HandleEvent/StateDemoComponent/ChangeColour";
import ExShoeStore from "./components/Props/ExShoeStore/ExShoeStore";
// import HeaderLayout from "./components/HeaderLayout";
import HomeTemplate from "./Template/HomeTemplate";
import AuthTemplate from "./Template/AuthTemplate";
import Login from "./Page/Auth/Login";
import Register  from "./Page/Auth/Register";
import Page404 from "./Page/Page404";
const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx : => html được viết trong file js (nền js) được gọi là jsx
// 2 loại function component , class component
root.render(
  <BrowserRouter>
  {/* Những thẻ nào để ngoài Routes thì luôn luôn được load lên */}
  {/* Thẻ Navlink (của react router dom) để di chuyển giữa các trang trong react */}
  {/* isActive sẽ trả về true khi router đó đang active, ngược lại sẽ trả về false */}
  {/* Header  */}
  <Routes>
    {/*Home template  */}
    <Route path="" element={<HomeTemplate />}>
      <Route index element={<div>Trang chủ</div>}></Route>
      <Route path="shoe-store" element={<ExShoeStore />}></Route>
      <Route path="bt-change-color" element={<ChangeColour />}></Route>
      <Route path="bt-change-car" element={<ChangeCar />}></Route>
    </Route>
    {/* AuthTemplate */}
    <Route path="auth" element={<AuthTemplate />}>
    <Route index element={<Login />}></Route>
{/* index này là để khi gõ auth thi vẫn ra login ma ko cần gõ auth/login */}
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element= {<Register />}></Route>
{/* khi gõ linh tinh trên url -> thì sẽ thông báo là ko tim thấy...hoặc là đẩy thẳng về trang chủ, hay trang login luôn */}
      <Route path="*" element={<Navigate to="auth/login" />}></Route>
      <Route path="/page-notfound" element={<Page404/>}></Route>

    </Route>
  </Routes>
</BrowserRouter>,
);
