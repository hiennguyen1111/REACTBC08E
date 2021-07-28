import React, { Component } from 'react'
// Ket noi du lieu den redux
import {connect} from 'react-redux';


class SanPham extends Component {
    
    
    render() {
        console.log(this.props);

        let {sanPham} = this.props;
        return (
            <div className="card">
                <img className="w-100" height={300} src={sanPham.hinhAnh} alt="..." />
                <div className="card-body">
                    <h3>{sanPham.tenSP}</h3>
                    <p>{sanPham.giaBan}</p>
                    <button className="btn btn-outline-success" onClick={()=>{
                        const action = {
                            type:'THEM_GIO_HANG', // thuoc tinh bat buoc de xac dinh xu ly
                            sanPhamClick:sanPham,// thuong se dat pageload
                        }
                        // Dua data len redux
                        this.props.dispatch(action);
                    }}>Them gio hang</button>
                </div>
            </div>
        )
    }
}

export default connect()(SanPham)