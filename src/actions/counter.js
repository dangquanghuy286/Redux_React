// Action là các đối tượng JavaScript mô tả những gì sẽ xảy ra trong ứng dụng.
export const up = () => {
    return {
        type: "UP"
    };
}

// Action để giảm giá trị counter
export const down = () => {
    return {
        type: "DOWN"
    };
}

// Action để đặt lại giá trị counter về 0
export const reset = () => {
    return {
        type: "RESET"
    };
}
