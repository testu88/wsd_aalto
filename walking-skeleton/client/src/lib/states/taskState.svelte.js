import {browser} from "$app/environment";

const TASK_KEY = "tasks";
let initialTasks = {};
if (browser && localStorage.getItem(TASK_KEY) !== null) {
    initialTasks = JSON.parse(localStorage.getItem(TASK_KEY));
};
let taskState = $state(initialTasks);

const saveTasks = () => {
    localStorage.setItem(TASK_KEY, JSON.stringify(taskState));
};

const useTaskState = () => {
    return {
        get tasks() {
            return taskState;
        },
        addTask: (todoId,task) => {
            if (!taskState[todoId]){
                taskState[todoId] = [];
            };
            taskState[todoId].push(task);
            saveTasks();
        },
        removeTask: (todoId,taskId) => {
            taskState[todoId] = taskState[todoId].filter((t) => t.id !== taskId);
            saveTasks();
        },
        resetTasks: (id) => {
            taskState[id] = [];
            saveTasks();
        },
        toggleDone: (todoId, task) => {
            if (!taskState[todoId]){
                return;
            };
            const tasks = taskState[todoId];
            const index = tasks.findIndex((t) => t.id === task.id);
            if (index === -1) {
                return;
            };
            const updatedTask = {
              ...tasks[index], is_done: !tasks[index].is_done
            };
           tasks[index] = updatedTask;
           taskState[todoId] = [...tasks];
            saveTasks();
        }
    };
};

export {useTaskState}; 