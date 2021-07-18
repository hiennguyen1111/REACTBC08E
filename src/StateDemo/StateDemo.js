/**
 * Các bước khi nhận 1 task hoặc 1 chức năng nào đó của ứng dụng
 * + Xây dựng giao diện cho ứng dụng (tạo component, html, css)
 * + Xác định dữ liệu thay đổi trên giao diện (xác định giá trị state có thể là src, text, html, style... Mình sẽ dùng kiểu dữ liệu gì để lưu trữ nó?)
 * + Xử lý event setState (onClick onChange gì đó) cho các nút xử lý (button, radio, input...)
 */

import React, { Component } from "react";

export default class StateDemo extends Component {
  /**
   * Thuộc tính state
   * + Là thuộc tính có sẵn của react class component, dùng để chứa giá trị thay đổi trên giao diện khi người dùng thao tác (click, keyup, keydown, blur...)
   */

  state = {
    isLogin: false,
    fSize: 15,
    imgSrc:'./img/CarBasic/products/red-car.jpg'
  };

  isLogin = false;
  username = "Hien";

  renderLogin = () => {
    if (this.state.isLogin) {
      return (
        <span className="font-weight-bold text-white">
          Hello {this.username}
        </span>
      );
    }
    return (
      <button
        className="btn btn-outline-success"
        onClick={() => {
          this.handleLogin();
        }}
      >
        Dang nhap
      </button>
    );
  };

  handleLogin = async () => {
    // this.state.isLogin= true;
    // true thi se render lai giao dien
    // nhung khong dc gan state truc tiep ma phai thong qua phuong thuc setState
    /**
     * this.setState(newState):
     * + Phuong thuc nay do react class component cung cap. Dung de thay doi gia tri state
     * + setState dc goi thi giao dien se dc render lai (ham render se chay lai)
     * + Phuong thuc setState la phuong thuc bat dong bo: Vi nhung thang truoc va sau no deu chay
     */
    let newState = {
      isLogin: true,
    };
    // Thay doi gia tri state va render lai giao dien
    await this.setState({
      isLogin: true,
    });
    console.log(this.state.isLogin);
  };


    handleChangeColor = (color) => {
        this.setState({
            imgSrc: `./img/CarBasic/products/${color}-car.jpg`
        })
    }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {/* {this.isLogin === true ? <span>Hello {this.username}</span> : <button className="btn btn-outline-success">Dang nhap</button>} */}
              {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
              {this.renderLogin()}
            </div>
          </div>
        </nav>

        <div className="container">
          <h3>Bai tap tang giam font chu</h3>
          <p style={{ fontSize: `${this.state.fSize}px` }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            consequatur possimus culpa alias vel id itaque sint voluptatibus
            natus labore!
          </p>
          <button
            className="btn btn-outline-danger mr-2"
            onClick={() => {
              this.setState({
                fSize: this.state.fSize + 2,
              });
            }}
          >
            +
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              this.setState({
                fSize: this.state.fSize - 2,
              });
            }}
          >
            -
          </button>
        </div>
        <br />
        <div className="container">
          <h3>Bai tap chon xe hoi</h3>
            <div className="row">
                <div className="col-6">
                    <img src={this.state.imgSrc} alt="..." className="w-100" />
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <button style={{background: 'red'}} className="btn text-white" onClick={()=>{
                                this.handleChangeColor('red')
                            }}>Red</button>
                        </div>
                        <div className="col-3">
                            <button style={{background: 'silver'}} className="btn text-white" onClick={()=>{
                                this.handleChangeColor('silver')
                            }}>Silver</button>
                        </div>
                        <div className="col-3">
                            <button style={{background: 'black'}} className="btn text-white" onClick={()=>{
                                this.handleChangeColor('black')
                            }}>Black</button>
                        </div>
                        <div className="col-3">
                            <button style={{background: 'gray'}} className="btn text-white" onClick={()=>{
                                this.handleChangeColor('steel')
                            }}>Steel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
