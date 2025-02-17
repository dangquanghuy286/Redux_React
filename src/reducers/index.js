import counterReducer from "./counter";
import { combineReducers } from "redux";

// Kết hợp nhiều reducers thành một root reducer
const allReducers = combineReducers({
    counter: counterReducer, // Đặt key 'counter' để truy cập state.counter
    // Có thể thêm nhiều reducers khác ở đây nếu cần
});

export default allReducers;
