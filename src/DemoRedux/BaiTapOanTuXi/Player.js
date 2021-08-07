import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            style={{ transform: "rotate(120deg)" }}
            className="mt-3"
            width={50}
            height={50}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt="..."
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={({ width: 200 }, { height: 200 })}
          src="./img/gameOanTuXi/player.png"
          alt="..."
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            // Xet gtri dat cuoc them vien cho item dc chon
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }

            return (
              <div className="col-4">
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                >
                  <img width={50} height={50} src={item.hinhAnh} alt="..." />
                </button>
              </div>
            );
          })}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
