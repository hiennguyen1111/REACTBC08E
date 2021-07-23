import React, { Component } from "react";

export default class Kinh extends Component {
  render() {
    let { sanPham,handleChangeGlass } = this.props;
    return (
        // <div className="container">
          <button className="btn btn-outline-dark bg-white mb-3 m-4">
            <img
              src={sanPham.url}
              alt="..."
              width={140}
              height={60}
              onClick={() => {
                handleChangeGlass(sanPham);
              }}
            />
          </button>
        // </div>
    
    );
  }
}
