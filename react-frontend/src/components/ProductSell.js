import React from "react";

export default function ProductSell() {
  return (
    <div>
      <div className="product-sell">
        <h4 className="p-5 text-center">SẢN PHẨM BÁN CHẠY</h4>
        <div className="container-fluid d-flex justify-content-center ">
          <div className="row w-100 gap-1">
            {/* Chia thành 5 cột */}
            <div className="col-2 boxsp">
              <div className="d-flex justify-content-center position-relative img-container">
                <img
                  src="./images/sp2.webp"
                  alt=""
                  className="boxsp-img img-zoom"
                />

                <div className="boxsp-discount position-absolute top-0 start-0 p-2">
                  -12%
                </div>
              </div>
              <div className="d-flex justify-content-center gap-3 p-2 mt-4">
                <div className="rounded-pill bg-white border border-dark text-center box-shape p-1 boxsp-static">
                  500 ml
                </div>
                <div className="rounded-pill bg-white border border-dark text-center box-shape p-1 boxsp-static">
                  500 ml
                </div>
              </div>
              <div className="fw-bold mt-3">
                Kilian Good Girl Gone Bad EDP (with Coffret)
              </div>
              <div className="d-flex mt-2">
                <del className="fw-light">7.500.000 đ</del>
                <span className="mx-auto text-danger fw-bold">5.900.000 đ</span>
              </div>
            </div>

            {/* Chia thành 5 cột */}
          </div>
        </div>
      </div>
    </div>
  );
}
