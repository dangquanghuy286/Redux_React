import TodoInput from "./todoInput";
import TodoList from "./todoList";

function TodoListMain() {
    return (
        <>

            <div className="todo">
                <TodoInput />
                <TodoList />
            </div>

        </>
    )

}
export default TodoListMain;