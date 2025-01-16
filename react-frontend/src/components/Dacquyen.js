import React from "react";

export default function Dacquyen() {
  return (
    <div>
      <div>
        <h4 className="p-5 text-center">ĐẶC QUYỀN KHI MUA HÀNG TRỰC TUYẾN</h4>
        <div
          class="container text-center"
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
        >
          <div class="row align-items-start">
            <div class="col">
              <img src="./images/uudai1.jpg" alt="" className="offer-img" />
              <h6 className="fw-semibold mt-3">GIAO HÀNG MIỄN PHÍ ĐẾN 30K</h6>
              <p className="text-start">
                Miễn phí vận chuyển cho tất cả các đơn đặt hàng dành cho Khách
                hàng thành viên. Trang webs hoạt động 24/7 để cùng bạn khám phá
                vẻ đẹp sang trọng bất cứ lúc nào.
              </p>
              <button
                className="banner-button rounded-pill bg-dark text-white"
                style={{ width: "375px" }}
              >
                MUA NGAY
              </button>
            </div>
            <div class="col">
              <img src="./images/uudai2.webp" alt="" className="offer-img" />
              <h6 className="fw-semibold mt-3">NHẬN MẪU THỬ MIỄN PHÍ</h6>
              <p className="text-start">
                Đặt hàng ngay và tận hưởng 3 mẫu thử sang trọng trong mỗi đơn
                hàng. Trải nghiệm các sản phẩm mới và khám phá các sản phẩm làm
                đẹp yêu thích trong tương lai của bạn.
              </p>
              <button
                className="banner-button rounded-pill bg-dark text-white"
                style={{ width: "375px" }}
              >
                MUA NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
