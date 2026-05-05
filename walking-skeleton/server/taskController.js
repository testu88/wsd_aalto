import * as taskRepository from './taskRepository.js';


const create = async (c) => {
    const todoId = Number(c.req.param("todoId"));
    if (!Number.isInteger(todoId)){
        return c.json({error: "Invalid todo id"}, 400);
    };
    const data = await c.req.json();
    if (!data.description){
        return c.json({error: "Missing required fields"}, 400);
    };
    const user = c.get("user");
    const newTask = await taskRepository.createTask(user.id, todoId, data);
    if (newTask === null){
        return c.json({error: "Todo not found"}, 404);
    }
    return c.json(newTask, 201);
};

const readAll = async (c) => {
     const todoId = Number(c.req.param("todoId"));
    if (!Number.isInteger(todoId)){
        return c.json({error: "Invalid todo id"}, 400);
    };
    const user = c.get("user");
    const tasks = await taskRepository.findTasks(user.id, todoId);
    if (tasks === null){
        return c.json({ error: "Todo not found"}, 404);
    };
    return c.json(tasks, 200);
};

const readOne = async (c) => {
    const taskId = Number(c.req.param("taskId"));
    if (!Number.isInteger(taskId)){
        return c.json({error: "Invalid task id"}, 400);
    };
    const user = c.get("user");
    const task = await taskRepository.findById(user.id, taskId);
    if (task === null){
        return c.json({error: "Todo not found"}, 404);
    };
  
    return c.json(task, 200);
};
const update = async (c) => {
    const taskId = Number(c.req.param("taskId"));
    if (!Number.isInteger(taskId)){
        return c.json({error: "Invalid task id"}, 400);
    };
    const data = await c.req.json();
    if (data.description === undefined || data.is_done === undefined){
        return c.json({error : "Missing required fields"}, 400);
    };
    const user = c.get("user");
    const updatedTask = await taskRepository.updateById(user.id, taskId, data);
    if (updatedTask === null){
        return c.json({error: "Todo not found"}, 404);
    };
    return c.json(updatedTask, 200);
};

const deleteOne = async (c) => {
    const taskId = Number(c.req.param("taskId"));
    if (!Number.isInteger(taskId)){
        return c.json({error: "Invalid task id"}, 400);
    };
    const user = c.get("user");
    const deletedTask = await taskRepository.deleteById(user.id, taskId);
    if (deletedTask === null){
        return c.json({error: "Todo not found"}, 404);
    };
    return c.json(deletedTask, 200);
};

export { create, readAll, readOne, deleteOne, update};