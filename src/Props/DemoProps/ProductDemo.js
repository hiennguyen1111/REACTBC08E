import React, { Component } from 'react'

export default class ProductDemo extends Component {
    render() {
        // this.props: thuộc tính có sẵn của rcc
        /**
         * PHÂN BIỆT GIỮA STATE VÀ PROPS
         * - Giống nhau: Cả 2 đều là thuộc tính sẵn của react class component (rcc) để binding dữ liệu lên giao diện
         * - Khác:
         *      + this.state dùng để chứa các giá trị thay đổi trên giao diện và có thể gán lại dc thông qua phương thức setState
         *      + this.props dùng để nhận gtri (có thể là object hoặc array) từ component cha (nơi sd thẻ đó) truyền vào. 
         *      Và lưu ý không thể gán lại gtri đó.
         */

        let {product} = this.props;

        return (
            <div className="card">
                <img src={product.img} alt="..." />
                <div className="card-body bg-dark text-white">
                    <h3>{product.name}</h3>
                    <h3>{product.price}</h3>
                </div>
            </div>
        )
    }
}
