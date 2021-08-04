const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyennguyen",
      hoTen: "Nguyen Hien",
      matKhau: "123456789",
      email: "nguyennguyen@gmail.com",
      soDienThoai: "0862985516",
      maLoaiNguoiDung: "KhachHang",
    },
    {
        taiKhoan: "nguyentran",
        hoTen: "Nguyen Tran",
        matKhau: "987654321",
        email: "nguyentran@gmail.com",
        soDienThoai: "0862985518",
        maLoaiNguoiDung: "KhachHang",
      },
  ],
};

export const baiTapQuanLyNguoiDungReducer = (state=stateDefault,action) => {
    switch(action.type){

        case 'THEM_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung]
            // state.mangNguoiDung.push(action.nguoiDung)
            return {...state}
        }

        case 'XOA_NGUOI_DUNG': {
            const mangNguoiDungCapNhat = [...state.mangNguoiDung]
            state.mangNguoiDung = mangNguoiDungCapNhat.filter(nguoiDung => nguoiDung.taiKhoan !== action.taiKhoan);
            return {...state};
        }
        default: return state
    }
}