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
    const newTodo = await taskRepository.create(todoId, data);
    return c.json(newTodo, 201);
};

const readAll = async (c) => {
     const todoId = Number(c.req.param("todoId"));
    if (!Number.isInteger(todoId)){
        return c.json({error: "Invalid todo id"}, 400);
    };
    const todos = await taskRepository.findAll(todoId);
    return c.json(todos, 200);
};

const readOne = async (c) => {
    const taskId = Number(c.req.param("taskId"));
    if (!Number.isInteger(taskId)){
        return c.json({error: "Invalid task id"}, 400);
    };
    const task = await taskRepository.findById(taskId);
    if (!task){
        return c.json({error: "Task not found"}, 404);
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
    const updatedTask = await taskRepository.updateById(taskId, data);
    if (!updatedTask){
        return c.json({error: "Task not found"}, 404);
    };
    return c.json(updatedTask, 200);
};

const deleteOne = async (c) => {
    const taskId = Number(c.req.param("taskId"));
    if (!Number.isInteger(taskId)){
        return c.json({error: "Invalid task id"}, 400);
    };
    const deletedTask = await taskRepository.deleteById(taskId);
    if (!deletedTask){
        return c.json({error: "Task not found"}, 404);
    };
    return c.json(deletedTask, 200);
};

export { create, readAll, readOne, deleteOne, update};