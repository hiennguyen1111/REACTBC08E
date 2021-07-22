import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp} = this.props;

        return (
            // toLocaleString là một phương thức JavaScript tích hợp được sử dụng để chuyển đổi ngày và giờ thành một chuỗi bằng cách sử dụng ngôn ngữ hệ thống. 
            // No dung cho cac doi tuong: Ngày / giờ, Số, Các đối tượng, Mảng
            <div className="card">
            <img src={sp.hinhAnh} alt="..." height={350} />
            <div className="card-body">
              <h3>{sp.tenSP}</h3>
              <p>{sp.giaBan.toLocaleString()}</p>
              <button className="btn btn-success" onClick={()=>{
                  this.props.xemChiTiet(sp);
              }}>Xem chi tiet</button>
            </div>
          </div>
        )
        // Cach viet ngan hon
        // let {sp,xemChiTiet} = this.props;
        // return (
        //     <div className="card">
        //     <img src={sp.hinhAnh} alt="..." height={350} />
        //     <div className="card-body">
        //       <h3>{sp.tenSP}</h3>
        //       <p>{sp.giaBan.toLocaleString()}</p>
        //       <button className="btn btn-success" onClick={()=>{
        //           xemChiTiet(sp);
        //       }}>Xem chi tiet</button>
        //     </div>
        //   </div>
        // )
    }
}
