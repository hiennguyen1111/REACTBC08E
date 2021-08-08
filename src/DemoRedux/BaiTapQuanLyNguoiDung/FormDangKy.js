import React, { Component } from "react";
import { connect } from "react-redux";

class FormDangKy extends Component {
  state = {
    values: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "KhachHang",
    },
    errors: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      maLoaiNguoiDung: "",
    },
  };

  handleChangeInput = (event) => {
    let { value, name } = event.target;
    let newValues = { ...this.props.nguoiDung.values };
    newValues[name] = value;

    let attrValue = "";
    let regex;

    if (event.target.getAttribute("typeEmail")) {
      attrValue = event.target.getAttribute("typeEmail");
      regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    }

    let newErrors = { ...this.props.nguoiDung.errors };
    let messageError = "";
    if (value.trim() === "") {
      messageError = name + " khong duoc bo trong!";
    }

    // Neu la email thi ktra them nua
    if (regex) {
      if (attrValue === "email") {
        if (!regex.test(value)) {
          messageError = name + " phai dung dinh dang!";
        }
      }
    }

    newErrors[name] = messageError;
    // Xu ly setState
    // this.setState({
    //   values: newValues,
    //   errors: newErros,
    // });

    // this.setState({
    //   [name]: value,
    // });
    // Kiem tra gtri sau khi state thay doi va sau khi render
    // console.log(this.state);

    this.props.dispatch({
      type:'HANDLE_CHANGE_INPUT',
      nguoiDung: {
        values:newValues,
        errors:newErrors
      }
    })
  };

  

  handleSubmit = (event) => {
    // Can tro su kien submit browser
    event.preventDefault();
    console.log("state", this.state);

    // Bat truong hop loi khong cho submit
    let valid = true;

    // Duyet bat error phai = null het moi hop le
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "") {
        valid = false;
        break;
      }
    }

    // Duyet bat tat ca value phai khac null moi hop le
    for (let key in this.state.values) {
      if (this.state.values[key] === "") {
        valid = false;
        break;
      }
    }

    if (!valid) {
      // Khong hop le cho dung lai
      alert("Du lieu khong hop le!");
      return;
    }
    // submit len redux tai day khi tat ca hop le
    const action = {
      type: "THEM_NGUOI_DUNG",
      nguoiDung: this.state.values,
    };
    this.props.dispatch(action);
  };

  render() {

    let { taiKhoan, hoTen, matKhau, email, soDienThoai, maLoaiNguoiDung } =
      this.props.nguoiDung.values;
  


    return (
      <form className="card mt-5" onSubmit={this.handleSubmit}>
        <div className="card-header text-white bg-dark">Form dang ky</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Tai Khoan</p>
                <input
                  value={taiKhoan}
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.taiKhoan}</p>
              </div>
              <div className="form-group">
                <p>Mat khau</p>
                <input
                  value={matKhau}
                  className="form-control"
                  name="matKhau"
                  type="password"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.matKhau}</p>
              </div>
              <div className="form-group">
                <p>Email</p>
                <input
                  value={email}
                  typeEmail="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>Ho ten </p>
                <input
                  value={hoTen}
                  className="form-control"
                  name="hoTen"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.hoTen}</p>
              </div>
              <div className="form-group">
                <p>So dien thoai</p>
                <input
                  value={soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <p>Ma loai nguoi dung</p>
                <select
                  value={maLoaiNguoiDung}
                  className="form-control"
                  name="maLoaiNguoiDung"
                  onChange={this.handleChangeInput}
                >
                  <option value="KhachHang">Khach Hang</option>
                  <option value="QuanTri">QuanTri</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-left">
          <button className="btn btn-outline-success mr-2" type="submit">
            Dang ky
          </button>
          <button type="button" onClick={()=>{
            const action = {
              type:'CAP_NHAT_NGUOI_DUNG',
              nguoiDungCapNhat: this.props.nguoiDung.values
            }
            this.props.dispatch(action);
          }} className="btn btn-outline-primary">Cap nhat</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nguoiDungChinhSua: state.baiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
    nguoiDung: state.baiTapQuanLyNguoiDungReducer.nguoiDung
  };
};

export default connect(mapStateToProps)(FormDangKy);
