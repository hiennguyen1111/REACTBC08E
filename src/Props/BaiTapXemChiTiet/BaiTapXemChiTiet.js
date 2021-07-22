import React, { Component } from "react";
import SanPham from './SanPham';

export default class BaiTapXemChiTiet extends Component {
  mangDienThoai = [
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

  // state luc nao cung co gia tri mac dinh
  state = {
      sanPhamChiTiet: {
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
      }
  }

  
  // Tu 1 mang du lieu muon bien thanh 1 mang giao dien => dung map
  renderSanPham = () => {
      return this.mangDienThoai.map((sanPham, index) => {
          // sp la ten props
          // xemChiTiet: truyen kieu nay y nghia la click vao moi goi ham. Day la kieu callback function
          // callback function la 1 ham chua duoc goi dong vai tro la tham so truyen di. va se dc goi tai ham hoac component nhan ham nay
        return <div className="col-4" key={index}>
          <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet}/>
        </div>
    })
  };

  xemChiTiet = (sanPhamClick) => {
    console.log('sanPhamClick',sanPhamClick);
    // set lai state khi click
    this.setState({
        sanPhamChiTiet:sanPhamClick
    })
  }

  render() {
    let {sanPhamChiTiet} = this.state; // boc tach thuoc tinh sanPhamChiTiet tu state
    return (
      <div className="container">
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row mb-5">
          {this.renderSanPham()}
          {/* <div className="col-4">
                        <div className="card">
                            <img src="https://picsum.photos/id/1/200/200" alt="..." />
                            <div className="card-body">
                                <h3>Ten san pham</h3>
                                <p>1000</p>
                                <button className="btn btn-success">Xem chi tiet</button>
                            </div>
                        </div>
                    </div>
                 */}          
          {/* <div className="col-4">
                        <div className="card">
                            <img src="https://picsum.photos/id/2/200/200" alt="..." />
                            <div className="card-body">
                                <h3>Ten san pham</h3>
                                <p>1000</p>
                                <button className="btn btn-success">Xem chi tiet</button>
                            </div>
                        </div>
                    </div> */}          
          {/* <div className="col-4">
                        <div className="card">
                            <img src="https://picsum.photos/id/3/200/200" alt="..." />
                            <div className="card-body">
                                <h3>Ten san pham</h3>
                                <p>1000</p>
                                <button className="btn btn-success">Xem chi tiet</button>
                            </div>
                        </div>
                    </div> */}
        </div>

        <div className="row">
          <div className="col-4">
            <h3 className="text-center">{sanPhamChiTiet.tenSP}</h3>
            <img
              src={sanPhamChiTiet.hinhAnh}
              alt="..."
              width="300"
              height="400"
            />
          </div>
          <div className="col-8">
            <h3>Thong so ky thuat</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Man hinh</th>
                  <th>{sanPhamChiTiet.manHinh}</th>
                </tr>
                <tr>
                  <th>He dieu hanh</th>
                  <th>{sanPhamChiTiet.heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera truoc</th>
                  <th>{sanPhamChiTiet.cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{sanPhamChiTiet.cameraSau}</th>
                </tr>
                <tr>
                  <th>RAM</th>
                  <th>{sanPhamChiTiet.ram}</th>
                </tr>
                <tr>
                  <th>ROM</th>
                  <th>{sanPhamChiTiet.rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
