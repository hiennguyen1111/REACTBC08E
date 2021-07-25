import React, { Component } from "react";
import Cart from "./Cart";
import ProductListCart from "./ProductListCart";

/** Xét nơi đặt state, vì ta cần dùng state đó hiển thị lên giao diện html
 * Nếu đặt state ở ProductListCart: danh sách sp không có chứa giao diện giỏ hàng
 * Nếu đặt state ở ExerciseCart:
 * + Có chứa nút xử lý button Thêm giỏ hàng (gián tiếp) - trong ProductList chứa ProductItem, ProductItem chứa nút
 * + Có chứa component Cart (component nay chua giao dien gio hang)
 */
export default class ExcerciseCart extends Component {
  dataPhone = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];

  // Khong nen luu gia tri thanh tien, vi day la gia tri tinh toan duoc, luu se bi tốn bộ nhớ
  state = {
    gioHang: [
      //     {
      //   maSP: 1,
      //   tenSP: "VinSmart Live",
      //   giaBan: 5700000,
      //   soLuong: 1,
      //   hinhAnh: "./img/vsphone.jpg",
      // }
    ],
  };

  themGioHang = (spClick) => {
    console.log(spClick);
    let spGioHang = { ...spClick, soLuong: 1 }; // Khi click vao sp them 1 thuoc tinh (soLuong) vao obj
    let gioHangCapNhat = [...this.state.gioHang]; // dung ... de lay gtri ben trong mang hien tai

    let spGH = gioHangCapNhat.find((sp) => sp.maSP === spGioHang.maSP); // Kiem tra sp vua click co ton tai trong gio hang hay chua
    if (spGH) {
      // tim thay
      spGH.soLuong += 1; // tang so luong
    } else {
      // khong tim thay : them vao gio hang
      gioHangCapNhat.push(spGioHang);
      // gioHangCapNhat=[...gioHangCapNhat,spGioHang] : cach viet khac
    }
    this.setState({
      // render (cap nhat) lai gia tri moi cho gio hang
      gioHang: gioHangCapNhat,
    });
  };

  xoaGioHang = (maSPClick) => {
    console.log(maSPClick);
    let { gioHang } = this.state; // boc tach phan tu
    // tim vi tri index sp co cung maSP voi maSPClick
    // let index = gioHang.findIndex(sp=>sp.maSP === maSPClick);
    // if(index!== -1)
    // {
    //     gioHang.splice(index,1);
    // }
    gioHang = gioHang.filter((sp) => sp.maSP !== maSPClick); // tạo 1 mảng mới không chứa phần tử mình xoá
    this.setState({
      gioHang: gioHang
    });
  };

  tangGiamSoLuong = (maSPClick, soLuong) => {
    //   console.log(maSPClick,soLuong);
    let { gioHang } = this.state;
    
    let spTangGiam = gioHang.find((sp) => sp.maSP === maSPClick);
    if (spTangGiam) {
      spTangGiam.soLuong += soLuong;
        if (spTangGiam.soLuong < 1) {
            alert('Số lượng tối thiểu là 1');
            spTangGiam.soLuong -= soLuong;
            // this.xoaGioHang(maSPClick); cách này là xoá luôn, về mặt UX không tốt
            // return;
        }
    }
    // Cập nhật lại state giỏ hàng
    this.setState({
        gioHang: gioHang
    })
  };

  tinhTongSoLuong = () => {
    let { gioHang } = this.state;
    
    let tongSoLuong = gioHang.reduce((soLuong, sanPham, index) => {
      return soLuong += sanPham.soLuong;
    }, 0);
    return tongSoLuong.toLocaleString();
  };

  tinhTongTien = () => {
    let { gioHang } = this.state;
    
    let tongTien = gioHang.reduce((thanhTien, sanPham, index) => {
      return (thanhTien += sanPham.soLuong * sanPham.giaBan);
    }, 0);
    return tongTien.toLocaleString();
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Bai tap gio hang</h3>
        <div className="text-right">
          <span
            style={{ cursor: "pointer" }}
            className="text text-danger font-weight-bold"
            data-toggle="modal"
            data-target="#modelId"
          >
            Gio hang ({this.tinhTongSoLuong()} - {this.tinhTongTien()})
          </span>
          <Cart gioHang={this.state.gioHang} 
          xoaGioHang={this.xoaGioHang} 
          tangGiamSoLuong={this.tangGiamSoLuong}/>
          <ProductListCart
            themGioHang={this.themGioHang}
            mangSanPham={this.dataPhone}
          />
        </div>
      </div>
    );
  }
}
