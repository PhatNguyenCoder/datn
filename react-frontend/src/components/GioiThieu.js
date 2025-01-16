import React, { useState } from "react";

export default function GioiThieu() {
  return (
    <div className="p-2 ms-5 me-5 mt-5">
      <h1 className="ms-3">GIỚI THIỆU</h1>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-4">
            <h3 className="fw-normal">Hương thơm tuyệt vời</h3>
            <p className="mt-4" style={{ fontSize: "14px" }}>
              Chào mừng bạn đến với <b className="text-danger">55 Perfume</b>{" "}
              của chúng tôi, nơi bạn có thể khám phá và tìm thấy những mùi hương
              tuyệt vời từ thế giới nước hoa. Chúng tôi tự hào là một địa chỉ
              đáng tin cậy cho những người yêu nước hoa, với một bộ sưu tập đa
              dạng và phong phú, hướng đến sự hài lòng tối đa của khách hàng.
            </p>
            <p>
              Chúng tôi hiểu rằng nước hoa không chỉ là một sản phẩm mà còn là
              một trải nghiệm, một cách để thể hiện cá nhân và tăng cường sự tự
              tin của bạn. Vì vậy, chúng tôi đã tỉ mỉ lựa chọn những thương hiệu
              nước hoa hàng đầu từ khắp nơi trên thế giới, để mang đến cho bạn
              những lựa chọn tuyệt vời nhất.
            </p>
          </div>
          <div className="col-8">
            <img
              src="../../images/gioithieuanh1.jpg"
              alt=""
              style={{ width: "792px", height: "441px", marginLeft: "15px" }}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-4">
            <img
              src="../../images/gioithieuanh2.jpg"
              alt=""
              style={{ width: "403px", height: "575px" }}
            />
          </div>
          <div className="col-8">
            <div className="ms-3">
              <h3 className="fw-normal mb-4">
                Vì sao 55 Perfume xứng đáng để đồng hành với bạn trên con đường
                trải nghiệm những cảm xúc mùi hương đầy thú vị này
              </h3>
              <p className="lh-lg">
                1. 55 Perfume luôn tìm kiếm những nguồn cung cấp nước hoa chất
                lượng và đảm bảo nước hoa chính hãng đến tay khách hàng với chi
                phí tốt nhất. <br />
                2. 55 Perfume 100% nói KHÔNG với nước hoa là hàng giả/ hàng
                nhái. (fake) 3. 55 Perfume 100% nói KHÔNG với "bán hàng bất
                chấp" và "cạnh tranh không lành mạnh". <br />
                4. 55 Perfume có Chính sách thanh toán/ vận chuyển... được quy
                định cụ thể trên website. <br />
                5. 55 Perfume trân trong từng cảm xúc của bạn như cảm xúc của
                chính mình, thế thôi!
              </p>
              <p>
                55 Perfume cũng như bạn, chúng ta chỉ có một cuộc đời và một
                khoảng thời gian nhất định của tuổi trẻ. Điều duy nhất 55
                Perfume mong bạn sẽ không bao giờ đánh mất đi chính là "bản thân
                mình".
              </p>
              <p>Đó thật sự là những cảm xúc tuyệt vời của tuổi thanh xuân!</p>
              <h5>Trân trọng.</h5>
              <h5>Đội ngũ 55 Perfume.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
