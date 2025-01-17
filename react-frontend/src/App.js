import { Link, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Banner from "./components/Banner";
import ProductSell from "./components/ProductSell";
import ThuongHieu from "./components/ThuongHieu";
import Nuochoanam from "./components/Nuochoanam";
import Nuochoanu from "./components/Nuochoanu";
import Dacquyen from "./components/Dacquyen";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import "./App.css";
import GioiThieu from "./components/GioiThieu";
import Sreach from "./components/Sreach";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          {/* HEADER */}
          <Header />
          {/* HEADER */}

          {/* NAV */}
          <Menu />
          {/* NAV */}

          {/* BANNER */}
          {/* BANNER */}

          {/* SẢN PHẨM BÁN CHẠY */}
          {/* SẢN PHẨM BÁN CHẠY */}

          {/* DANH MỤC VÀ THƯƠNG HIỆU */}
          {/* DANH MỤC VÀ THƯƠNG HIỆU */}

          {/* NƯỚC HOA NAM */}
          {/* NƯỚC HOA NAM */}

          {/* NƯỚC HOA NỮ */}
          {/* NƯỚC HOA NỮ */}

          {/* ĐẶC QUYỀN */}
          {/* ĐẶC QUYỀN */}

          <Routes>
            {/* Route cho trang giỏ hàng */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/gioithieu" element={<GioiThieu />} />
            <Route path="/sreach" element={<Sreach />} />
            <Route path="/dm" element={<Nuochoanam />} />

            {/* Các Route khác */}
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <ProductSell />
                  <ThuongHieu />
                  <Nuochoanam />
                  <Nuochoanu />
                  <Dacquyen />
                </>
              }
            />
          </Routes>

          {/* FOOTER */}
          <Footer></Footer>
          {/* FOOTER */}
        </div>
      </Router>
    </div>
  );
}

export default App;
