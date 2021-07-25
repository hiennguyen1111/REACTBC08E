import React, { Component } from 'react'
import ProductItemCart from './ProductItemCart';

export default class ProductListCart extends Component {

    // rendersanPham = () => {
    //     let {mangSanPham}=this.props;
    //     return mangSanPham.map;
    // }
    render() {
        let {mangSanPham, themGioHang} = this.props;

        // return chi tra ve giao dien, khong khai bao bien trong return duoc
        return (
            <div className="row">
                {/* <div className="col-4">
                    <ProductItemCart />
                </div>
                <div className="col-4">
                    <ProductItemCart />
                </div>
                <div className="col-4">
                    <ProductItemCart />
                </div> */}
                
                {/* nhung gi tao ra tu map nen co key={index} */}
                {mangSanPham.map((sanPham,index) => {
                    return <div className="col-4" key={index}>
                        <ProductItemCart themGioHang={themGioHang} sp={sanPham} />
                        </div>
                })}
            </div>
        )
    }
}
