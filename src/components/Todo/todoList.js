import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { IoRemoveCircle } from "react-icons/io5";
import { IoArrowUndoCircleSharp } from "react-icons/io5";
import "./Todo.css"
import { completeTodo, deleteTodo, undoTodo } from "../../actions/todo";
function TodoList() {
    const todoList = useSelector(state => state.todoReducers);
    const dispatch = useDispatch();
    const handleComplete = (id) => {
        dispatch(completeTodo(id))

    }
    const handleUndo = (id) => {
        dispatch(undoTodo(id))
    }
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <>
            {todoList && (
                <div className="todo__List">
                    {todoList.map((item, index) => (
                        <div className="todo__Item" key={index}>
                            <span className={"todo__Content " + (item.completed && "todo__Content--completed")}>{item.content}</span>
                            {item.completed ? (

                                <button onClick={() => handleUndo(item.id)} ><IoArrowUndoCircleSharp /></button>

                            ) : (
                                <button onClick={() => handleComplete(item.id)}><FaCheckCircle /></button>
                            )}
                            <button onClick={() => handleDelete(item.id)}><IoRemoveCircle /></button>

                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default TodoList;
