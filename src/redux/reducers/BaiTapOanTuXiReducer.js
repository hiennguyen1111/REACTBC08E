const stateDefault = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/gameOanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/gameOanTuXi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm Iron man, I love you 3000!!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "keo", hinhAnh: "./img/gameOanTuXi/keo.png" },
};

export const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      // Reset mang cuoc
      let mangCuocUpdate = [...state.mangDatCuoc];
      // Tao ra mang cuoc moi tu mang cuoc cu va action.maCuoc do nguoi dung truyen len
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      // setState  cua mangCuoc => render lai giao dien
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RAN_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoa nhau !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua sml !!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "I'm Iron man, I love you 3000!!!";
          }
          break;

        case "bua":
          if (computer.ma === "keo") {
            state.soBanThang += 1;
            state.ketQua = "I'm Iron man, I love you 3000!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Hoa nhau !!!";
          } else {
            state.ketQua = "Thua sml !!!";
          }
          break;

        case "bao":
          if (computer.ma === "keo") {
            state.ketQua = "Thua sml !!!";
          } else if (computer.ma === "bua") {
            state.soBanThang += 1;
            state.ketQua = "I'm Iron man, I love you 3000!!!";
          } else {
            state.ketQua = "Hoa nhau !!!";
          }
          break;
          default: 
          state.soBanThang += 1;
          state.ketQua = "I'm Iron man, I love you 3000!!!";
          return {...state}
      }
      state.soBanChoi += 1;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

// export default BaiTapOanTuXiReducer;
