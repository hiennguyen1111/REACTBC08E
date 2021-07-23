import React, { Component } from "react";
import LoaiKinh from "./LoaiKinh";

export default class BaiTapThuKinh extends Component {
  arrGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/Glasses/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./img/Glasses/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./img/Glasses/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./img/Glasses/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./img/Glasses/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./img/Glasses/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./img/Glasses/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./img/Glasses/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/Glasses/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    chiTietSanPham: {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./img/Glasses/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  handleChangeGlass = (glassNo) => {
    this.setState({
      imgSrc: `./img/Glasses/v${glassNo}.png`,
    });
  };

  // xemChiTiet = (clickAnh) => {
  //   console.log("clickAnh", clickAnh);
  //   // set lai state khi click
  //   this.setState({
  //     chiTietSanPham: clickAnh,
  //   });
  // };

  renderKinh = () => {
    return this.arrGlasses.map((kinh, index) => {
      return <div className="col-6 text-center after" key={index}>
          <LoaiKinh loaiKinh={kinh} />
        </div>
    });
  };
  
  render() {
    // let {chiTietSanPham} = this.state;
    return (
      <div className="container-fluid">
        <header>
          <h3 className="text-center text-white p-4">TRY GLASSES APP ONLINE</h3>
        </header>
        <div className="d-flex justify-content-around">
          {/* {this.renderKinh()} */}
          <div className="col-6 text-center after">
            <img
              id="model"
              src="./img/Glasses/model.jpg"
              alt="model_after"
              width={250}
              height={300}
            />

            <div className="detail">
              <img
                id="glass"
                src="./img/Glasses/v1.png"
                alt="..."
                width={140}
                height={60}
              />

              <div id="text">
                <h4>GUCCI G8850U</h4>
                <p>
                  Light pink square lenses define these sunglasses, ending with
                  amother of pearl effect tip.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 text-center before">
            <img
              src="./img/Glasses/model.jpg"
              alt="model_before"
              width={250}
              height={300}
            />
          </div>
        </div>

        <div className="flex-container">
          <div>
            <a href="#1">
              <img
                src="./img/Glasses/v1.png"
                alt="..."
                onClick={() => {
                  this.handleChangeGlass("1");
                }}
              />
            </a>
          </div>
          <div>
            <a href="#2">
              <img
                src="./img/Glasses/v2.png"
                alt="..."
                onClick={() => {
                  this.handleChangeGlass("2");
                }}
              />
            </a>
          </div>
          <div>
            <a href="#3">
              <img
                src="./img/Glasses/v3.png"
                alt="..."
                onClick={() => {
                  this.handleChangeGlass("3");
                }}
              />
            </a>
          </div>
          <div>
            <a href="#4">
              <img
                src="./img/Glasses/v4.png"
                alt="..."
                onClick={() => {
                  this.handleChangeGlass("4");
                }}
              />
            </a>
          </div>
          <div>
            <a href="#5">
              <img
                src="./img/Glasses/v5.png"
                alt="..."
                onClick={() => {
                  this.handleChangeGlass("5");
                }}
              />
            </a>
          </div>
          <div>
            <a href="#6">
              <img
                src="./img/Glasses/v6.png"
                alt="..."
                onClick={() => {
                  this.handleChangeGlass("6");
                }}
              />
            </a>
          </div>
          <div>
            <a href="#7">
              <img
                src="./img/Glasses/v7.png"
                alt="..."
                onClick={() => {
                  this.handleChangeGlass("7");
                }}
              />
            </a>
          </div>
          <div>
            <a href="#8">
              <img
                src="./img/Glasses/v8.png"
                alt="..."
                onClick={() => {
                  this.handleChangeGlass("8");
                }}
              />
            </a>
          </div>
          <div>
            <a href="#9">
              <img
                src="./img/Glasses/v9.png"
                alt="..."
                onClick={() => {
                  this.handleChangeGlass("9");
                }}
              />
            </a>
          </div>
        </div>
        <div className="pt-5"></div>
      </div>
    );
  }
}
