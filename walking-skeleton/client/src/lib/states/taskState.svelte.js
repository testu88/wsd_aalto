let taskState = $state({});

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
            console.log(taskState); 
        },
        resetTasks: (id) => {
            taskState[id] = [];
        },
    };
};

export {useTaskState}; 