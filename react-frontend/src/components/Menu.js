import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <nav className="d-flex justify-content-center align-items-center p-2 ">
        <ul className="nav-list d-flex gap-5">
          <li>
            <Link to={"/"}>Trang chủ</Link>
          </li>
          <li>
            <Link to={"/gioithieu"}>Giới thiệu</Link>
          </li>
          <li>
            <a href="">Thương hiệu</a>
          </li>
          <li>
            <a href="">Nước hoa nam</a>
          </li>
          <li>
            <a href="">Nước hoa nữ</a>
          </li>
          <li>
            <a href="">Nước hoa Unisex</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
