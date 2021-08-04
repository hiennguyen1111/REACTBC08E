import React, { Component } from 'react'

// Ket noi redux
import {connect} from 'react-redux';

class KetQuaTroChoi extends Component {
    render() {
        let {banChon, soBanThang, soBanChoi} = this.props.BaiTapGameXucXacReducer;

        return (
            <div className="container text-center">
                <div className="display-4">Ban chon: <span className="text-warning"> {banChon ? 'Tai' : 'Xiu'} </span></div>
                <div className="display-4">So ban thang: <span className="text-success"> {soBanThang} </span></div>
                <div className="display-4">Tong so ban choi: <span className="text-primary"> {soBanChoi} </span></div>
                <button className="btn bg-success">
                    <div className="display-4" onClick={()=>{
                        const action = {
                            type:'PLAY_GAME',
                        }
                        this.props.dispatch(action)
                    }}>Play game</div>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer)=>{


    return {
        BaiTapGameXucXacReducer: rootReducer.BaiTapGameXucXacReducer,
        // banChon: rootReducer.BaiTapGameXucXacReducer.banChon,
        // soBanThang: rootReducer.BaiTapGameXucXacReducer.soBanThang,
        // soBanChoi: rootReducer.BaiTapGameXucXacReducer.soBanChoi,
    }
}

// Moi file chi export default dc 1 lan
export default connect(mapStateToProps)(KetQuaTroChoi);