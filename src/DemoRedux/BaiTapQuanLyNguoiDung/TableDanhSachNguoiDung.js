import React, { Component } from "react";
import { connect } from "react-redux";

class TableDanhSachNguoiDung extends Component {
  


  render() {
    return (
      <div className="card mt-5">
        <div className="card-header bg-dark text-white">
          Danh sach nguoi dung
        </div>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tai khoan</th>
              <th>Ho ten</th>
              <th>Mat khau</th>
              <th>Email</th>
              <th>So dien thoai</th>
              <th>Ma loai nguoi dung</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.mangNguoiDung.map((nguoiDung, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{nguoiDung.taiKhoan}</td>
                  <td>{nguoiDung.hoTen}</td>
                  <td>{nguoiDung.matKhau}</td>
                  <td>{nguoiDung.email}</td>
                  <td>{nguoiDung.soDienThoai}</td>
                  <td>{nguoiDung.maLoaiNguoiDung}</td>
                  <td>
                    <button className="btn btn-outline-danger mr-2" onClick={()=> {
                        const action = {
                            type:'XOA_NGUOI_DUNG',
                            taiKhoan:nguoiDung.taiKhoan
                        }
                        this.props.dispatch(action)
                    }}>Xoa</button>

                    <button onClick={()=>{
                      const action = {
                        type:'CHINH_SUA',
                        nguoiDungChinhSua: nguoiDung
                      }
                      this.props.dispatch(action)
                    }} className="btn btn-outline-primary">
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
/**
 * { return    <=>     ()}
 */
const mapStateToProps = (state) => ({
  mangNguoiDung: state.baiTapQuanLyNguoiDungReducer.mangNguoiDung

});

export default connect(mapStateToProps)(TableDanhSachNguoiDung);
