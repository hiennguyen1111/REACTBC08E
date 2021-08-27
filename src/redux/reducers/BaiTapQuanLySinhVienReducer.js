const stateDefault = {
  mangSinhVien: [
    {
      maSinhVien: "11",
      hoTen: "Nguyen Hien",
      soDienThoai: "0862985516",
      email: "nguyennguyen@gmail.com",
    },
  ],
  sinhVienChinhSua:
  {
    maSinhVien: "12",
    hoTen: "Nguyen Hien",
    soDienThoai: "0862985516",
    email: "nguyennguyen@gmail.com",
  },
  sinhVien: {
    values: {
      maSinhVien: '',
      hoTen: '',
      soDienThoai: '',
      email: '',
    },
    errors: {
      maSinhVien: '',
      hoTen: '',
      soDienThoai: '',
      email: '',
    }
  }
};

export const BaiTapQuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
      return { ...state };
    }

    case "XOA_SINH_VIEN": {
      const mangSinhVienCapNhat = [...state.mangSinhVien];
      state.mangSinhVien = mangSinhVienCapNhat.filter(
        (sinhVien) => sinhVien.maSinhVien !== action.maSinhVien
      );
      return { ...state };
    }

    case "CHINH_SUA_SINH_VIEN": {
      state.sinhVien.values = action.sinhVienChinhSua;
      state.sinhVien = { ...state.sinhVien };
      return { ...state };
    }

    case "HANDLE_CHANGE_INPUT_SV": {
      // Đổi từ SV chỉnh sửa sang sinhVien
      state.sinhVien = action.sinhVien;

      return { ...state };
    }

    case "CAP_NHAT_SINH_VIEN": {
      const mangSinhVienCapNhat = [...state.mangSinhVien];
      // Tim ra sinh vien can cap nhat
      let index = mangSinhVienCapNhat.findIndex(
        (sinhVien) => sinhVien.maSinhVien === action.sinhVienCapNhat.maSinhVien
      );
      if (index !== -1) {
        mangSinhVienCapNhat[index] = action.sinhVienCapNhat;
      }
      state.mangSinhVien = mangSinhVienCapNhat;
      return { ...state };
    }
    default:
      return state;
  }
};
