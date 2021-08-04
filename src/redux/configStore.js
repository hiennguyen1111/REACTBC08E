import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";

import { BaiTapGameXucXacReducer } from "./reducers/BaiTapGameXucXacReducer";

// state trong redux se co ten goi moi: reducer va no chua function
const rootReducer = combineReducers({
  // Cac state ung dung se dc luu tai day, ngan cach boi dau phay
  gioHangReducer: gioHangReducer,
  BaiTapGameXucXacReducer: BaiTapGameXucXacReducer,

//   reducerB: (state='',action) => {
//     console.log('action2', action);
//     return state;
//   },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
