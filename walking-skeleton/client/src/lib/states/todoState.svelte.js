import {browser} from "$app/environment";
import * as todosApi from "$lib/apis/todosApi.js";


/*const TODO_KEY = "todos";
let initialTodos = [];
if (browser && localStorage.getItem(TODO_KEY) !== null) {
    initialTodos = JSON.parse(localStorage.getItem(TODO_KEY));
};
const saveTodos = () => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoState)); 
};*/

let todoState = $state([]);

const initTodos = async () => {
  if (browser){
      todoState = await todosApi.getTodos();
  }
};

const initTodo = async (id) => {
   if (browser){
    const todo = await todosApi.getTodo(id);
    if (todo && !todoState.find((b) => b.id === id)){
        todoState.push(todo);
    };
   };
};

const useTodoState = () => {
    return {
        get todos() {
            return todoState;
        },
        addTodo: (todo) => {
            todosApi.createTodo(todo).then((newTodo) => {
                todoState.push(newTodo);
            });
        },
        removeTodo: (id) => {
           todosApi.deleteTodo(id).then((removed) => {
            todoState = todoState.filter((t) => t.id !== id);
           });
        },
        updateTodo: (id,todo) => {
            todosApi.updateTodo(todo).then((updatedTodo) => {
                const index = todoState.findIndex((t) => t.id === id);
                if (index !== -1){
                    todoState[index] = updatedTodo;
                };
            });
        },
       resetTodos: (id) => {
            todoState.set([]);
            saveTodos();
        },
    };
};

export {initTodo, initTodos, useTodoState};