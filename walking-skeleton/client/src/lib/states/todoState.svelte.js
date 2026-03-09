import {browser} from "$app/environment";
let KEY = "todos";
let initialTodos = [];
if (browser && localStorage.getItem(KEY) !== null){
    initialTodos = JSON.parse(localStorage.getItem(KEY));
};
let todoState = $state(initialTodos);

const saveTodos = () => {
    localStorage.setItem(KEY, JSON.stringify(todoState));
}

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
            saveTodos();
        },
        removeTodo: (id) => {
            todoState.filter((t) => t.id != id);
            saveTodos();
        },
    };
};

export {useTodoState};