import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChangeCar from "./components/HandleEvent/StateDemoComponent/ChangeCar";
import ChangeColour from "./components/HandleEvent/StateDemoComponent/ChangeColour";
import ExShoeStore from "./components/Props/ExShoeStore/ExShoeStore";
import HeaderLayout from "./components/StyleComponent/HeaderLayout";
import HomeTemplate from "./Template/HomeTemplate";
const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx : => html được viết trong file js (nền js) được gọi là jsx
// 2 loại function component , class component
root.render(
  <BrowserRouter>
    {/* Những thẻ nào để ngoài Routes thì luôn luôn được load lên */}
    {/* Thẻ Navlink (của react router dom) để di chuyển giữa các trang trong react */}
    {/* isActive sẽ trả về true khi router đó đang active, ngược lại sẽ trả về false */}

    <HeaderLayout />

    <Routes>
      {/* localhost:3000/shoe-store */}

      <Route path="home" element={<HomeTemplate />}>
        <Route path="" element={<div>Trang chủ</div>}></Route>
        <Route path="/shoe-store" element={<ExShoeStore />}></Route>
      </Route>

      <Route path="/bt-change-color" element={<ChangeColour />}></Route>
      <Route path="/bt-change-car" element={<ChangeCar />}></Route>
    </Routes>
  </BrowserRouter>
);
