import React, { Component } from 'react'
import ProductItem from './ProductItem';
export default class ProductList extends Component {

    renderProduct = () => {
        let content = this.props.arrProduct.map((product,index)=>{
            return <div className="col-4" key={index}>
                <ProductItem prd={product} />
            </div>
        });
        return content;
    }

    render() {
        console.log(this.props.arrProduct);

        return (
            <div>
                <h3 className="text-center">Shoes Shop</h3>
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
