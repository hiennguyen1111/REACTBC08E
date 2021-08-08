import React, { Component } from "react";
// import LoaiKinh from "./LoaiKinh";
import Kinh from "./Kinh";
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
  
  // Thay vì truyền id thì sẽ truyền cả object
  handleChangeGlass = (objSanPham) => {
    this.setState({
      chiTietSanPham:objSanPham,
    });
  };
  
  renderKinh = ()=>{
    return this.arrGlasses.map((item, index)=>{
      return(
        <>
          <Kinh key={index} sanPham={item} handleChangeGlass={this.handleChangeGlass}  />
        </>
      )
    })
  }
  render() {
    let { chiTietSanPham } = this.state;
    return (
      <div className="container-fluid-glass">
        <header>
          <h3 className="text-center text-white p-4">TRY GLASSES APP ONLINE</h3>
        </header>
        <div className="d-flex justify-content-around">

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
                src={chiTietSanPham.url}
                alt="..."
                width={140}
                height={60}
              />

              <div id="text">
                <h4>{chiTietSanPham.name}</h4>
                <p>{chiTietSanPham.desc}</p>
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
        
         {this.renderKinh()}
        
        <div className="pt-5"></div>
      </div>
    );
  }
}
