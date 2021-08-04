// Liet ke cac state cua ung dung bai tap game
const stateDefault = {
  soBanChoi: 0,
  soBanThang: 0,
  banChon: true,
  mangXucXac: [
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
  ],
};

export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }
    case "PLAY_GAME": {
      // Tap ra xuc xac ngau nhien tu random: 3 lan
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // Moi lan se tao ra 1 so ngau nhien
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // Tu so ngau nhien tao ra 1 xuc xac ngau nhien
        let xxnn = {
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          diem: soNgauNhien,
        };
        // Them vao mang xuc xac ngau nhien
        mangXucXacNgauNhien.push(xxnn);
      }
      // Set lai state.mangXucXac = mang xuc xac ngau nhien
      state.mangXucXac = mangXucXacNgauNhien;

      // Xu ly thang cuoc
      let tongDiem = mangXucXacNgauNhien.reduce((tong,xxnn,index)=>{
          return tong+= xxnn.diem;
      },0);

        if((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem<= 11)){
            state.soBanThang += 1;
      }
      state.soBanChoi +=1;
      return { ...state };
    }
    case 'RESET_GAME': {
        state.mangXucXac = [
            { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
            { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
            { hinhAnh: "./img/gameXucXac/1.png", diem: 1 },
          ]
        state.soBanThang = 0;
        state.soBanChoi = 0;
        state.banChon = true;
        return {...state}
    }

    default:
      return state;
  }
};
