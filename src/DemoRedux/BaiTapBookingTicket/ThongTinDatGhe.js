import React, { Component } from "react";
import {connect} from 'react-redux';
import { huyGheAction } from "../../redux/actions/BaiTapBookingTicketActions";



class ThongTinDatGhe extends Component {
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
          <table className="table table-bordered">
            <thead>
              <tr style={{fontSize:'35px'}} className="text-light">
                <th>So ghe</th>
                <th>Gia</th>
                <th>Huy</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                return <tr key={index}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia}</td>
                  <td><button onClick={()=>{
                    this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                  }}>Huy</button></td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tong tien</td>
                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index)=>{
                  return tongTien += gheDangDat.gia;
                },0).toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BaiTapBookingTicketReducer.danhSachGheDangDat
  }
}

export default connect(mapStateToProps)(ThongTinDatGhe);