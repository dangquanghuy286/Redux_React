// Reducer xử lý các hành động liên quan đến bộ đếm
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "UP":
            return state + 1; // Tăng giá trị bộ đếm
        case "DOWN":
            return state - 1; // Giảm giá trị bộ đếm
        case "RESET":
            return 0; // Đặt lại giá trị về 0
        default:
            return state; // Trả về state hiện tại nếu action không khớp
    }
}

export default counterReducer;
