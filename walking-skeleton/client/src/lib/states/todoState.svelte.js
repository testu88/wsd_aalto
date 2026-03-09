let todoState = $state([]);

const useTodoState = () => {
    return {
        get todos() {
            return todoState;
        },
        getOne: (id) => {
            return todoState.find((t)=> t.id === id);
        },
        addTodo: (todo) => {
            todoState.length > 0 ? todoState.push({id: todoState.length+1, name: todo}) 
            : todoState.push({id: 1, name: todo});
        },
    };
};

export {useTodoState};