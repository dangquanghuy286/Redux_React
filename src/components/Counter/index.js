import { useSelector, useDispatch } from "react-redux";
import { down, reset, up } from "../../actions/counter";


function Counter() {
    const counter = useSelector(state => state.counter); // Lấy giá trị counter từ Redux store
    const dispatch = useDispatch(); // Hàm để gửi action lên Redux store

    return (
        <>
            <h2>Đếm : {counter}</h2>
            <button onClick={() => dispatch(up())}>Tăng</button>
            <button onClick={() => dispatch(down())}>Giảm</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </>
    )
}

export default Counter;
