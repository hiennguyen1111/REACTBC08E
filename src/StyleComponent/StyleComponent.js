import React, { Component } from 'react'

import style from './StyleComponent.module.css';


export default class StyleComponent extends Component {
    render() {

        let fontSize = 50;

        return (
            <div className="container">
                style Component
                <p style={{
                fontSize: `${fontSize}px`,
                padding:'10px',
                paddingTop:'15px'
                }} 
                className={`${style.fontBold} ${style['p-green']}`}>Hello</p>
            </div>
        )
    }
}

// Truyen gia tri bien vo chuoi (string) => co dau $
// Con khi truyen o ngoai, hien thi o ngoai thi khong can dau $


// sinhVien = {
//     name: 'A';
//     id: '1';
// }
// sinhVien.name;
// sinhVien['name]