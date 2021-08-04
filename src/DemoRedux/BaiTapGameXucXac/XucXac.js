import React, { Component } from "react";


// Ket noi redux
import {connect} from 'react-redux';

class XucXac extends Component {

    renderKetQua = () => {
        // tinh tong diem 3 nut xi ngau
        let tongDiem = this.props.mangXucXac.reduce((tong,xxnn,index)=>{
            return tong += xxnn.diem;
        },0);
        let ketQua = tongDiem > 11 ? 'Tai' : 'Xiu';
        return `${tongDiem} - ${ketQua}`
    }


    render() {

    let {mangXucXac} = this.props;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <button className="btn btn-danger" onClick={()=>{
                const action = {
                    type: 'DAT_CUOC',
                    banChon: true,
                }
                // dung props tu redux cng cap va dung dispatch gui du lieu di
                this.props.dispatch(action);
            }}>
              <div className="p-5 display-4">Tai</div>
            </button>
          </div>
          <div className="col-6 text-center">
              <img src={mangXucXac[0].hinhAnh} width={50} alt="..." />
              <img src={mangXucXac[1].hinhAnh} width={50} alt="..." />
              <img src={mangXucXac[2].hinhAnh} width={50} alt="..." />
              <div className="display-4 pt-3">
                    {this.renderKetQua()}
              </div>
          </div>
          <div className="col-3">
            <button className="btn btn-dark text-white" onClick={()=>{
                const action = {
                    type: 'DAT_CUOC',
                    banChon: false,
                }
                // dung props tu redux cng cap va dung dispatch gui du lieu di
                this.props.dispatch(action);
            }}>
              <div className="p-5 display-4">Xiu</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer)=>{


    return {
        mangXucXac: rootReducer.BaiTapGameXucXacReducer.mangXucXac
    }
}


export default connect(mapStateToProps)(XucXac)