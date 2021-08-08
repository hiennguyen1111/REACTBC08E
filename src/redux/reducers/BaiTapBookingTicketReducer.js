import { DAT_GHE, HUY_GHE } from "../types/BaiTapBookingTicketType";

const stateDefault = {
  danhSachGheDangDat: [
    // {soGhe:1, gia:1000}
  ],
};

export const BaiTapBookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );
      if (index !== -1) {
        // Khi nguoi dung click gheDangDat da co trong mang => remove di
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // Khi nguoi dung click gheDangDat chua co trong mang => push vao mang
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }

    case HUY_GHE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        // Khi nguoi dung click gheDangDat da co trong mang => remove di
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
