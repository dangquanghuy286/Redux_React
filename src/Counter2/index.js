import { useSelector } from "react-redux";

function Counter2() {
    const counter = useSelector(state => state.counter);
    return (
        <>
            <h2>ĐẾM 2 : {counter} </h2>
        </>
    )
}
export default Counter2;