import React, { Component } from 'react'
import FormDienThongTin from './FormDienThongTin';
import TableDanhSachSinhVien from './TableDanhSachSinhVien';


export default class BaiTapQuanLySinhVien extends Component {
    render() {
        return (
            <div className="container">
                <FormDienThongTin />
                <TableDanhSachSinhVien />
            </div>
        )
    }
}
