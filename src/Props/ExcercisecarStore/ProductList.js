import React, { Component } from "react";
import ProductItem from "./ProductItem";
import Modal from "./Modal";

export default class ProductList extends Component {
  renderProductList = () => {
    // Lay ra mang san pham tu component cha truyen vao thong qua propsName
    let { productsData,viewDetail } = this.props;
    return productsData.map((product, index) => {
      return <div className="col-3" key={index}>
          <ProductItem item={product} viewDetail={viewDetail} />
        </div>
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row mb-5">{this.renderProductList()}</div>
      </div>
    );
  }
}
