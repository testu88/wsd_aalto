import {browser} from "$app/environment";
import * as tasksApi from "$lib/apis/tasksApi.js";

/*const TASK_KEY = "tasks";
let initialTasks = {};
if (browser && localStorage.getItem(TASK_KEY) !== null) {
    initialTasks = JSON.parse(localStorage.getItem(TASK_KEY));
};

const saveTasks = () => {
    localStorage.setItem(TASK_KEY, JSON.stringify(taskState));
};*/

let taskState = $state({});

const initTodoTasks = async (todoId) => {
    if (!browser){
        return;
    };
   taskState[todoId] = await tasksApi.getTasks(todoId);
};

const useTaskState = () => {
    return {
        get tasks() {
           return taskState;
        },  
        addTask: (todoId, task) => {
           tasksApi.createTask(todoId, task).then((newTask) => {
            const tasks = taskState[todoId] || [];
            tasks.push(newTask);
            taskState[todoId] = tasks;
           });
        },
        removeTask: (todoId,taskId) => {
         tasksApi.deleteTask(todoId, taskId).then((removed) => {
            taskState[todoId] = taskState[todoId].filter((t) => t.id !== removed.id);
         });
        },
        resetTasks: (id) => {
            taskState[id] = [];
        },
        updateTask: (todoId, task) => {
            task.is_done = !task.is_done;
            tasksApi.updateTask(todoId, task).then((updatedTask) => {
                if (!taskState[todoId]){
                    return;
                };
                const index = taskState[todoId].findIndex((t) => t.id === task.id);
                if (index !== -1) {
                    const tasks = taskState[todoId];
                    tasks[index] = updatedTask;
                    taskState[todoId] = tasks;
                };
            });
        }
    };
};

export {initTodoTasks, useTaskState}; 