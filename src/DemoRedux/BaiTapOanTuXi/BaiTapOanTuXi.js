import React, { Component } from "react";
import Player from "./Player";
import Computer from "./Computer";
import Result from "./Result";
import "./BaiTapOanTuXi.css";

import { connect } from "react-redux";

class BaiTapOanTuXi extends Component {

  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player />
          </div>
          <div className="col-4">
            <Result />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success p-2 display-4 mt-2"
            >
              Play game
            </button>
          </div>
          <div className="col-4">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // Khai bao ham lap di lap lai
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count > 10) {
          // Neu count > 100 thi dung lap lai
          clearInterval(randomComputerItem);
          dispatch({
              type:'END_GAME'
          })
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
