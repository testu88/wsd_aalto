import {browser} from "$app/environment";

let TASK_KEY = "tasks";
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
        addTask: (id,task) => {
            if (!taskState[id]) {
           taskState[id] = []; 
            };
            taskState[id].push({id: taskState[id].length+1, name: task});
            saveTasks();
        },
        removeTask: (todoId,taskId) => {
            console.log("remove todo id and task id:", todoId, taskId);
            taskState[todoId] = taskState[todoId].filter((t)=> t.id !== taskId);
            console.log("state of remove task", taskState[todoId]);
            saveTasks();
        },
        resetTasks: (id) => {
            taskState[id] = [];
            saveTasks();
        },
    };
};

export {useTaskState}; 