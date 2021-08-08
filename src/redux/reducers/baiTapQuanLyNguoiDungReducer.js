const stateDefault = {
  mangNguoiDung: [
    {
      taiKhoan: "nguyennguyen",
      hoTen: "Nguyen Hien",
      matKhau: "123456789",
      email: "nguyennguyen@gmail.com",
      soDienThoai: "0862985516",
      maLoaiNguoiDung: "KhachHang",
    }],
    nguoiDungChinhSua: [{
        taiKhoan: "nguyentran",
        hoTen: "Nguyen Tran",
        matKhau: "987654321",
        email: "nguyentran@gmail.com",
        soDienThoai: "0862985518",
        maLoaiNguoiDung: "KhachHang",
      }],

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

        case 'CHINH_SUA': {
          state.nguoiDung.values = action.nguoiDungChinhSua;
          state.nguoiDung = {...state.nguoiDung}
          return {...state}
        }

        case 'HANDLE_CHANGE_INPUT': {
          state.nguoiDung = action.nguoiDungChinhSua;


          return {...state}
        }

        case 'CAP_NHAT_NGUOI_DUNG': {
          const mangNguoiDungCapNhat = [...state.mangNguoiDung]
          // Tim ra nguoi dung can cap nhat
          // let nguoiDungCapNhat = mangNguoiDungCapNhat.find(nguoiDung => nguoiDung.taiKhoan === action.nguoiDungCapNhat.taiKhoan);
          let index = mangNguoiDungCapNhat.findIndex(nguoiDung=>nguoiDung.taiKhoan === action.nguoiDungCapNhat.taiKhoan)
          // if(nguoiDungCapNhat){
          //   nguoiDungCapNhat.hoTen = action.nguoiDungCapNhat.hoTen
          //   nguoiDungCapNhat.email = action.nguoiDungCapNhat.email
          //   nguoiDungCapNhat.soDienThoai = action.nguoiDungCapNhat.soDienThoai
          //   nguoiDungCapNhat.matKhau = action.nguoiDungCapNhat.matKhau
          //   nguoiDungCapNhat.maLoaiNguoiDung = action.nguoiDungCapNhat.maLoaiNguoiDung

          // }
          if(index !== -1) {
            mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;
          }
          state.mangNguoiDung = mangNguoiDungCapNhat;
          return {...state}
        }
        default: return state
    }
}