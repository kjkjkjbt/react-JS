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
import Register from "./Page/Auth/Register";
import Page404 from "./Page/Page404";
import Admin from "./Page/Auth/Admin";
import ReactForm from './Page/ReactForm/ReactForm';
import ReactLifeCycle from "./Page/ReactLifeCycle/ReactLifeCycle";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import ChangeNumberRedux from "./Page/DemoRedux/ChangeNumberRedux";

const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx : => html được viết trong file js (nền js) được gọi là jsx
// 2 loại function component , class component
root.render(
  <Provider store={store}>
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
        <Route path="bt-form" element={<ReactForm />}></Route>
        <Route path="bt-life-cycle" element={<ReactLifeCycle />}></Route>
        <Route
            path="redux-change-number"
            element={<ChangeNumberRedux />}
          ></Route>
        
      </Route>
      {/* AuthTemplate */}
      <Route path="auth" element={<AuthTemplate />}>
        <Route index element={<Login />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>

      <Route path="/page-notfound" element={<Page404 />}></Route>
      {/* /kjkjkjkjk */}
      {/* path * là tất cả những đường dẫn k tồn tại trong đây */}
      <Route path="admin" element={<Admin />}></Route>

      <Route path="*" element={<Navigate to="" />}></Route>
    </Routes>
    </BrowserRouter>,

  </Provider>
  
);
