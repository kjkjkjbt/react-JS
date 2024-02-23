import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import HeaderLayout from "../components/HeaderLayout";

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <HeaderLayout />
        <Outlet /> 
        {/* outlet là phần nội dung thay đổi, outlet của react-router-dom */}

        <footer className="bg-dark text-white p5">Đây là footer</footer>
      </div>
    );
  }
}
