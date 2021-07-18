import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {prd} = this.props;
        return (
            <div className="card">
                <img src={prd.image} alt="..." />
                <div className="card-body">
                    <h4 style={{height:'50px'}}>{prd.name}</h4>
                    <h4 style={{fontSize:'15px'}, {fontWeight:'bold'}}>{prd.price}$</h4>
                    <br />
                    <button className="p-2 mt-2" 
                    style={{backgroundColor:'#000', border:'none',color:'#fff'}}>Add to card</button>
                </div>
            </div>
        )
    }
}
