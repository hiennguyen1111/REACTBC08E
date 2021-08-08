import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import HangGhe from "./HangGhe";
import danhSachGheData from "../../assets/data/danhSachGhe.json";

export default class BaiTapBookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe,index) =>{
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }


  render() {
    return (
      <div className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/bg-movie.jpg')",
          backgroundSize: "100%"}}>
        
        <div style={{position: "fixed", width:"100%", height:"100%", backgroundColor: "rgba(0,0,0,0.7)"}}>
            <div className="container-fluid">
            <div className="row">
                <div className="col-8 text-center">
                    <div className="text-warning display-4">Dat ve xem phim CyberLern.vn</div>
                    <div className="mt-3 text-light" style={{fontSize:"25px"}}>Man hinh</div>
                    <div className="mt-2" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                        <div className="screen"></div>
                        {this.renderHangGhe()}
                    </div>
                    
                </div>
                <div className="col-4">
                    <div style={{fontSize:'35px'}} className="text-light mt-2">Danh sach ghe ban chon</div>
                    <ThongTinDatGhe />
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}
