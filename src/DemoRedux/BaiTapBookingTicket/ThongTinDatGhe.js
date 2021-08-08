import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span style={{ fontSize: "30px" }} className="text-light">
            Ghe da dat
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span style={{ fontSize: "30px" }} className="text-light">
            Ghe dang dat
          </span>
          <br />
          <button className="ghe" style={{ marginLeft: "0px" }}></button>
          <span style={{ fontSize: "30px" }} className="text-light">
            Ghe chua dat
          </span>
        </div>

        <div className="mt-5">
          <table className="table border-2">
            <thead>
              <tr style={{fontSize:'35px'}} className="text-light">
                <th>So ghe</th>
                <th>Gia</th>
                <th>Huy</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
