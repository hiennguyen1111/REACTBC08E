import React, { Component } from "react";
// Thu vien ket noi redux
import { connect } from "react-redux";

class GioHang extends Component {

    renderGioHang = () => {
        return this.props.gioHang.map((spGH,index)=>{
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} height={50} width={50} alt="..." /></td>       
                <td>{spGH.giaBan.toLocaleString()}</td>
                <td>
                    <button className="btn btn-outline-primary mr-2" onClick={()=>{
                        const action = {
                            type:'TANG_GIAM_SO_LUONG',
                            maSPClick:spGH.maSP,
                            soLuong:-1
                        }
                        this.props.dispatch(action)
                    }}>-</button>{spGH.soLuong}
                    <button className="btn btn-outline-primary ml-2" onClick={()=>{
                        const action = {
                            type:'TANG_GIAM_SO_LUONG',
                            maSPClick:spGH.maSP,
                            soLuong:1
                        }
                        this.props.dispatch(action)
                    }}>+</button>
                </td>              
                <td>{(spGH.giaBan*spGH.soLuong).toLocaleString()}</td>
                <td><button className="btn btn-outline-danger" onClick={()=>{
                    const action = {
                        // Tao action chua du lieu tren redux, luu y dat type khac nhau
                        type:'XOA_GIO_HANG',
                        maSPClick:spGH.maSP,
                    }
                    // Dung ham dispatch ma redux cung cap de gui du lieu len redux (reducer)
                    this.props.dispatch(action);
                }}>Xoa</button></td>
            </tr>
        })
    }

    render() {
        console.log(this.props);


    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Gio hang</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center p-2">Ma san pham</th>
                      <th className="text-center p-2">Ten san pham</th>
                      <th className="text-center p-2">Hinh anh</th>
                      <th className="text-center p-2">Gia ban</th>
                      <th className="text-center p-2">So luong</th>
                      <th className="text-center p-2">Thanh tien</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.renderGioHang()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Ham nay se giup gui du lieu len redux giong het this.props.dispatch
// const mapDispatchToProps = (rootReducer)=> {
//     // Tra ve props la ham
//     return {
//         xoaGioHang: (maSPClick)=>{
//             const action = {
//                 type:'XOA_GIO_HANG',
//                 maSPClick: maSPClick,
//             }
//             dispatch(action);
//         }
//     }
// }
// const mapDispatchToProps = (rootReducer)=> {
//     return {
//         gioHang: rootReducer.gioHangReducer
//     }
// }


// Ham nay giup lay gia tri state tu redux ve, ben doi thanh props cua component
const mapStateToProps = (rootReducer) => {
  // thuong hay ghi rootReducer thanh state

  return {
    gioHang: rootReducer.gioHangReducer,
  };
};

const ComponentGioHangRedux = connect(mapStateToProps)(GioHang);
export default ComponentGioHangRedux;
