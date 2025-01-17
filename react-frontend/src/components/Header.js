import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="d-flex justify-content-between align-items-center ">
        <Link
          to={""}
          className="p-5 text-white header-contact text-decoration-none"
        >
          Liên hệ
        </Link>
        <div className="logo">
          <img src="./images/logo.jpg" alt="" className="logo-img img-fluid" />
        </div>
        <div className="d-flex gap-4 p-5 header-icon">
          <Link to={"/sreach"}>
            <i className="bi bi-search text-white"></i>
          </Link>
          <Link to={"/cart"}>
            <i className="bi bi-cart-fill text-white"></i>
          </Link>

          <i className="bi bi-person-fill text-white"></i>
        </div>
      </header>
    </div>
  );
}
