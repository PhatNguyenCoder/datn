import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sreach extends Component {
  render() {
    return (
      <div className="p-2 ms-5 me-5 mt-5">
        <h2>Tìm kiếm</h2>
        <input
          type="text"
          name=""
          id=""
          placeholder="Tìm kiếm..."
          className="p-2 w-100 rounded-pill mt-4 px-4"
        />
        <div className="mt-4">
          <span>Danh mục nổi bật</span>
          <ul className="mt-2">
            <li>
              <Link className="text-decoration-none text-black ">
                <span className="footer-dm">Nước hoa nam</span>
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-black footer-dm">
                <span className="footer-dm">Nước hoa nam</span>
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none text-black footer-dm">
                <span className="footer-dm">Nước hoa nam</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
