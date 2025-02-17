const init = [
    {
        id: 1,
        content: "Công việc 1",
        completed: true
    },
    {
        id: 2,
        content: "Công việc 2",
        completed: false
    },
    {
        id: 3,
        content: "Công việc 3",
        completed: true
    },
]
const todoReducers = (state = init, action) => {
    let newState = [...state];
    console.log(state, action);
    switch (action.type) {
        case "CREATE_TODO":
            newState = [
                ...newState,
                {
                    id: Date.now(), // Ensure unique id
                    content: action.content,
                    completed: false
                }
            ];
            return newState; // Return new state
        case "COMPLETE_TODO":
            const index = newState.findIndex(item => {
                return item.id === action.id;
            })
            newState[index].completed = true;
            console.log(newState);

            return newState; // Return new state
        case "UNDO_TODO":
            const indexUndo = newState.findIndex(item => {
                return item.id === action.id;
            })
            newState[indexUndo].completed = false;
            console.log(newState);

            return newState; // Return new state
        case "DELETE_TODO":
            newState = newState.filter(item => {
                return item.id !== action.id;
            })

            return newState; // Return new state
        default:
            return state;
    }
};

export default todoReducers;
