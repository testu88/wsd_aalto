import {browser} from "$app/environment";
let TODO_KEY = "todos";
let initialTodos = [];
if (browser && localStorage.getItem(TODO_KEY) !== null){
    initialTodos = JSON.parse(localStorage.getItem(TODO_KEY));
};
let todoState = $state(initialTodos);

const saveTodos = () => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoState));
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
           todoState.push({id: todoState.length + 1, name: todo});
           saveTodos(); 
        },
        removeTodo: (id) => {
            todoState = todoState.filter((t) => t.id != id);
            saveTodos();
            
        },
    };
};

export {useTodoState};