import React, { Component } from "react";

export default class LoaiKinh extends Component {
  render() {
    let { loaiKinh } = this.props;
    return (
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
            src={loaiKinh.url}
            alt="..."
            width={140}
            height={60}
          />

          <div id="text">
            <h4>{loaiKinh.name}</h4>
            <p>{loaiKinh.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
