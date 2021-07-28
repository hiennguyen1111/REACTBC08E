import { combineReducers, createStore } from "redux";
import { gioHangReducer } from "./reducers/gioHangReducer";


// state trong redux se co ten goi moi: reducer va no chua function
const rootReducer = combineReducers({
  // Cac state ung dung se dc luu tai day
  gioHangReducer: gioHangReducer,

//   reducerB: (state='',action) => {
//     console.log('action2', action);
//     return state;
//   },
});

export const store = createStore(rootReducer);
