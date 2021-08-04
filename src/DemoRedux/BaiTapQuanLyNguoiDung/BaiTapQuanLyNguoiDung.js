import React, { Component } from 'react'
import TableDanhSachNguoiDung from './TableDanhSachNguoiDung';
import FormDangKy from './FormDangKy';


export default class BaiTapQuanLyNguoiDung extends Component {
    render() {
        return (
            <div className="container">
                <FormDangKy />
                <TableDanhSachNguoiDung />
            </div>
        )
    }
}
