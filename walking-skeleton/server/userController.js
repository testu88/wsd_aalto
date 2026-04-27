import * as userRepository from "./userRepository.js";



const getAllUsers = async (c) => {
    const users = await userRepository.getAllUsers();
    console.log("Controller users:", users );
    return c.json(users);
};

const getStats = async (c) => {
    const user = c.get("users");
    const todos = await userRepository.getAllTodos();
    const tasks = await userRepository.getAllTasks();
    return c.json({todos: 100, tasks: 250});
};

export { getAllUsers, getStats };