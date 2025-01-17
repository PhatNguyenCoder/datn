import React, { useState } from "react";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  const price = 415000;
  const discountedPrice = price * 0.85;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = discountedPrice * quantity;

  return (
    <div className="p-2 ms-5 me-5 mt-5">
      <h2>GIỎ HÀNG (CÓ 2 SẢN PHẨM)</h2>
      <div class="container-fluid mt-5">
        <div class="row ">
          <div class="col-8 border-end">
            <div className="d-flex pb-3 position-relative">
              <div>
                <img src="../../images/sp1.webp" alt="" className="cart-img" />
              </div>
              <div className="me-5 ms-5 mt-5 lh-lg">
                <h5 className="">
                  Kilian Good Girl Gone Bad EDP (with Coffret)
                </h5>
                <p>15ml</p>
                <div className="d-flex gap-4">
                  <i
                    class="bi bi-chevron-compact-down"
                    onClick={decreaseQuantity}
                  ></i>
                  <p>{quantity}</p>
                  <i
                    class="bi bi-chevron-compact-up"
                    onClick={increaseQuantity}
                  ></i>
                </div>
                <div className="d-flex gap-5">
                  <p>{discountedPrice.toLocaleString()} đ</p>
                  <del className="visually-hidden">
                    {price.toLocaleString()} đ
                  </del>
                </div>

                <p>
                  Sản phẩm đã được giảm giá{" "}
                  <span className="text-danger">15%</span>
                </p>
              </div>
              <button className="closeCart">X</button>
            </div>
          </div>
          <div class="col-4">
            <div className="row mt-2">
              <div className="col">Tạm tính:</div>
              <div className="col">
                <h3>{totalPrice.toLocaleString()} đ</h3>
              </div>
              <div className="text-center mt-5 pb-3">
                <button className="button-cart">MUA NGAY</button>
                <button
                  className="button-cart"
                  style={{ background: "#fff", color: "#000" }}
                >
                  TIẾP TỤC MUA HÀNG
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
