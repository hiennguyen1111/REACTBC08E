import React, { Component } from 'react'

export default class Databinding extends Component {

    // Thuoc tinh
    name = 'Hien';
    img = "https://picsum.photos/200/200"

    // Phuong thuc xay dung
    renderCard = () => {
        let product = {
            id:1,
            name: 'Iphone',
            price:1000,
            img: 'https://picsum.photos/id/10/200/200'
        }

        return <div className="card w-25">
            <img src={product.img} alt="..." />
            <div className="cardBody">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="btn btn-success">Mua hang</button>
            </div>
            </div>
    }

    render() {
        // Khai bao bien, ham (Khai bao se co tu khoa let var const va dc khai bao trong ham va phuong thuc)
        let tenHocVien = 'Hien';
        
        return (          
                <div className="container">
                    <div id="content"> {tenHocVien} </div>
                    <div id="content"> {this.name} </div>
                    <div className="card w-25">
                        <img src={this.img} alt="..." />
                    </div>
                    {this.renderCard()}
                </div>           
        )
    }
}
