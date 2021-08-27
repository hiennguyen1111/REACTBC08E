import React, { Component } from "react";
import { connect } from "react-redux";

class TableDanhSachSinhVien extends Component {
  render() {
    return (
      <div className="card mt-5">
        <div className="card-header bg-dark text-white">
          Thong Tin Sinh Vien
        </div>
        <table>
          <thead>
            <tr>
              <th>Ma sinh vien</th>
              <th>Ho ten</th>
              <th>So dien thoai</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.mangSinhVien.map((sinhVien, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{sinhVien.hoTen}</td>
                  <td>{sinhVien.soDienThoai}</td>
                  <td>{sinhVien.email}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger mr-2"
                      onClick={() => {
                        const action = {
                          type: "XOA_SINH_VIEN",
                          maSinhVien: sinhVien.maSinhVien,
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      Xoa
                    </button>

                    <button
                      onClick={() => {
                        const action = {
                          type: "CHINH_SUA_SINH_VIEN",
                          sinhVienChinhSua: sinhVien
                        };
                        this.props.dispatch(action);
                      }}
                      className="btn btn-outline-primary"
                    >
                      Chinh sua
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mangSinhVien: state.BaiTapQuanLySinhVienReducer.mangSinhVien,
});

export default connect(mapStateToProps)(TableDanhSachSinhVien);
