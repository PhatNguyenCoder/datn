import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <footer>
        <div>
          <div class="text-center p-3 mt-5 bg-black">
            <div class="row align-items-start">
              <div class="col d-flex justify-content-center align-items-center ">
                <img src="./images/shipping.webp" alt="" />
                <p className="text-white ms-1">100% Nhập khẩu chính hãng</p>
              </div>
              <div class="col d-flex justify-content-center align-items-center ">
                <img src="./images/samples.webp" alt="" />
                <p className="text-white ms-2">Nhận mẫu thử miễn phí</p>
              </div>
              <div class="col d-flex justify-content-center align-items-center ">
                <img
                  src="./images/complimentary-engraving_v3.webp"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
                <p className="text-white ms-2">
                  Quà tặng kèm & Ưu đãi đặc biệt
                </p>
              </div>
            </div>
          </div>

          <div class="container text-center mt-5">
            <div class="row align-items-start">
              <div class="col-2">
                <img src="./images/logo2.jpg" alt="" className="logo2" />
              </div>
              <div class="col-4 p-3 mt-4">
                <h6 className="text-start">LIÊN HỆ</h6>
                <div
                  className="text-start lh-sm mt-4"
                  style={{ fontSize: "14px" }}
                >
                  <p>Giờ hoạt động: 08h - 22h hàng ngày (cả T7 CN)</p>
                  <p>TỔNG ĐÀI TƯ VẤN 1 – 012 3456 789</p>
                  <p>TỔNG ĐÀI TƯ VẤN 2 – 012 3456 789</p>
                  <p>Email liên hệ: cskh@55Perfume.vn</p>
                </div>
              </div>
              <div class="col-2 p-3 mt-4">
                <h6 className="text-start">NƯỚC HOA</h6>
                <div
                  className="text-start lh-sm mt-4 "
                  style={{ fontSize: "14px" }}
                >
                  <p className="footer-dm">
                    <Link
                      to={"/dm"}
                      className="text-decoration-none text-black"
                      onClick={scrollTop}
                    >
                      Nước hoa nam
                    </Link>
                  </p>
                  <p className="footer-dm">
                    <Link
                      to={"/dm"}
                      className="text-decoration-none text-black"
                      onClick={scrollTop}
                    >
                      Nước hoa nữ
                    </Link>
                  </p>
                  <p className="footer-dm">
                    <Link
                      to={"/dm"}
                      className="text-decoration-none text-black"
                      onClick={scrollTop}
                    >
                      Nước hoa unisex
                    </Link>
                  </p>
                  <p className="footer-dm">
                    <Link
                      to={"/dm"}
                      className="text-decoration-none text-black"
                      onClick={scrollTop}
                    >
                      Nước hoa mini
                    </Link>
                  </p>
                </div>
              </div>
              <div class="col-4 p-3 mt-4">
                <h6 className="text-start">THANH TOÁN</h6>
                <img
                  src="./images/payment.webp"
                  alt=""
                  style={{ width: "420px", marginTop: "10px" }}
                />
              </div>
            </div>
          </div>
          <p className="text-center">
            Bản quyền nội dung thuộc về 55Perfume © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
