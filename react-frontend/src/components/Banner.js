import React from "react";

export default function Banner() {
  return (
    <div>
      <div className="d-flex justify-content-center p-5 banner">
        <div>
          <img src="./images/sp1.webp" alt="" />
        </div>
        <div className="banner-content">
          <h2 className="banner-title lh-lg">Chanel Bleu De Chanel EDP</h2>
          <p className="banner-describe fw-light">
            Hương thơm nam tính và tinh tế, lý tưởng cho mọi dịp từ công sở đến
            tiệc tối.
          </p>
          <p className="banner-price lh-lg">3.730.000 ₫</p>
          <button className="banner-button rounded-pill">Xem ngay</button>
        </div>
      </div>
    </div>
  );
}
