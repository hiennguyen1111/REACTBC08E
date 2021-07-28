const gioHang = [
    // {
    //   maSP: 1,
    //   tenSP: "Iphone",
    //   giaBan: 1000,
    //   soLuong: 1,
    //   hinhAnh: "https://picsum.photos/200/200",
    // },
  ];

  export const gioHangReducer = (state = gioHang, action) => {
    console.log('action',action);
    switch(action.type){
        case 'THEM_GIO_HANG': {
            const spGH = {...action.sanPhamClick,soLuong:1};
            // Kiem tra sp co trong gio hang chua
            let gioHangCapNhat = state;
            let spGioHang = gioHangCapNhat.find(sp=>sp.maSP===spGH.maSP);
            if(spGioHang) {
                spGioHang.soLuong +=1;
            } else {
                gioHangCapNhat.push(spGH)
            }
            console.log('gioHangCapNhat',gioHangCapNhat);
            // immutable (Tinh bat bien object: phai tra ve obj moi, arr phai tra ve arr moi)
            return [...gioHangCapNhat];
            // tra ve state moi (luu y kieu du lieu state tra ve phai giong kieu du lieu state cu)
        }

        case 'XOA_GIO_HANG': {
            const gioHangCapNhat = state.filter(sp=>sp.maSP !== action.maSPClick);
            return [...gioHangCapNhat];
        }

        case 'TANG_GIAM_SO_LUONG': {
            let gioHangCapNhat = [...state];
            let spGH = gioHangCapNhat.find(sp=>sp.maSP === action.maSPClick);
            if(spGH){
                spGH.soLuong += action.soLuong;
                if(spGH.soLuong<1){
                    alert('So luong toi thieu la 1');
                    spGH.soLuong -= action.soLuong;
                }
            }
            return [...gioHangCapNhat];
        }

        default : return state;
    }

  }