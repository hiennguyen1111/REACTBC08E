import React, { Component } from "react";
import { connect } from "react-redux";

class FormDienThongTin extends Component {
  state = {
    values: {
      maSinhVien: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errorsValues: {
      maSinhVien: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  };

  handleChangeInputSV = (event) => {
    let { value, name } = event.target;
    let newValues = { ...this.props.sinhVien.values };
    newValues[name] = value;

    let attrValue = "";
    let regex;

    if (event.target.getAttribute("typeEmail")) {
      attrValue = event.target.getAttribute("typeEmail");
      regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    }

    let newErrors = { ...this.props.sinhVien.errorsValues };
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

    this.props.dispatch({
      type: "HANDLE_CHANGE_INPUT_SV",
      sinhVien: {
        values: newValues,
        errorsValues: newErrors,
      },
    });
  };

  handleSubmitSV = (event) => {
    // Can tro su kien submit browser
    event.preventDefault();
    console.log("state", this.props.sinhVien);

    // Bat truong hop loi khong cho submit
    let valid = true;

    // Duyet bat error phai = null het moi hop le
    for (let key in this.props.sinhVien.errorsValues) {
      if (this.props.sinhVien.errorsValues[key] !== "") {
        valid = false;
        break;
      }
    }

    // Duyet bat tat ca value phai khac null moi hop le
    for (let key in this.props.sinhVien.values) {
      if (this.props.sinhVien.values[key] === "") {
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
      type: "THEM_SINH_VIEN",
      sinhVien: this.props.sinhVien.values,
    };
    this.props.dispatch(action);
  };

  render() {
    let { maSinhVien, hoTen, soDienThoai, email } = this.props.sinhVienChinhSua;

    return (
      <form className="card mt-5" onSubmit={this.handleSubmitSV}>
        <div className="card-header text-white bg-dark">
          Form dien thong tin
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <p>Ma Sinh Vien</p>
                <input
                  value={maSinhVien}
                  className="form-control"
                  name="maSinhVien"
                  onChange={this.handleChangeInputSV}
                />
                <p className="text-danger">
                  {this.state.errorsValues.maSinhVien}
                </p>
              </div>

              <div className="form-group">
                <p>Ho ten</p>
                <input
                  value={hoTen}
                  className="form-control"
                  name="hoTen"
                  onChange={this.handleChangeInputSV}
                />
                <p className="text-danger">{this.state.errorsValues.hoTen}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <p>So dien thoai</p>
                <input
                  value={soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInputSV}
                />
                <p className="text-danger">
                  {this.state.errorsValues.soDienThoai}
                </p>
              </div>

              <div className="form-group">
                <p>Email</p>
                <input
                  value={email}
                  typeEmail="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInputSV}
                />
                <p className="text-danger">{this.state.errorsValues.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-left">
          <button className="btn btn-outline-success mr-2" type="submit">
            Them Sinh Vien
          </button>
          <button
            type="button"
            onClick={() => {
              const action = {
                type: "CAP_NHAT_SINH_VIEN",
                sinhVienCapNhat: this.props.sinhVien.values,
              };
              this.props.dispatch(action);
            }}
            className="btn btn-outline-primary"
          >
            Cap nhat
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sinhVienChinhSua: state.BaiTapQuanLySinhVienReducer.sinhVienChinhSua,
    sinhVien: state.BaiTapQuanLySinhVienReducer.sinhVien,
  };
};

export default connect(mapStateToProps)(FormDienThongTin);
