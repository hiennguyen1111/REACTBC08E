import React, { Component } from 'react'
import XucXac from './XucXac';
import KetQuaTroChoi from './KetQuaTroChoi';
import './BaiTapGameXucXac.css'; // Anh huong toan bo ung dung ke ca app.js

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className="bg-game">
                <h3 className="text-center display-4 p-2">Bai tap game xuc xac</h3>
                
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}
