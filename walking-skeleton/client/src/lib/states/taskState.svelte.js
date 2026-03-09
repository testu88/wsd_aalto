import {browser} from "$app/environment";

let KEY = "tasks";
let initialTasks = {};
if (browser && localStorage.getItem(KEY) !== null) {
    initialTasks = JSON.parse(localStorage.getItem(KEY));
};
let taskState = $state(initialTasks);

const saveTasks = () => {
    localStorage.setItem(KEY, JSON.stringify(taskState));
};

const useTaskState = () => {
    return {
        get tasks() {
            return taskState;
        },
        addTask: (id,task) => {
            if (!taskState[id]) {
           taskState[id] = []; 
            };
            taskState[id].push({id: taskState[id].length+1, name: task});
            saveTasks();
        },
        removeTask: (id) => {
            taskState.filter((t) => t.id != id);
            saveTasks();
        },
        resetTasks: (id) => {
            taskState[id] = [];
            saveTasks();
        },
    };
};

export {useTaskState}; 