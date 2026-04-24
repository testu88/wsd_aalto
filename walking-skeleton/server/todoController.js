import * as todoRepository from './todoRepository.js';

// Layered Architecture : add controller functions here and export them
const create = async (c) => {
    const user = c.get("user");
    const data = await c.req.json();
    if (!data.name){
        return c.json({error: "Missing required fields"}, 400);
    };
    const todo = await todoRepository.createTodo(user.id, data);
    return c.json(todo, 201);
};
const readAll = async (c) => {
    const user = c.get("user");
    const todos = await todoRepository.findTodos(user.id);
    return c.json(todos, 200);
};

const readOne = async (c) => { 
    const user = c.get("user");
    const todoId = Number(c.req.param("todoId")); 
    if (!Number.isInteger(todoId)) { return c.json({error: "Invalid todo id"}, 400); }; 
    const todo = await todoRepository.findById(user.id, todoId); 
    if (!todo){ return c.json({error: "Todo not found"}, 404); }; 
    return c.json(todo, 200); };

const update = async (c) => {
    const user = c.get("user");
    const todoId = Number(c.req.param("todoId"));
    if (!Number.isInteger(todoId)){
        return c.json({error: "Invalid todo id"}, 400);
    };
    const data = await c.req.json();
    if (!data.name){
        return c.json({error: "Missing required fields"}, 400);
    };
    const updatedTodo = await todoRepository.updateById(user.id, todoId, data);
    if (!updatedTodo){
        return c.json({error: "Todo not found"}, 404);
    }
        return c.json(updatedTodo,200 );
};
const deleteOne = async (c) => {
    const user = c.get("user");
    const todoId = Number(c.req.param("todoId"));
    if (!Number.isInteger(todoId)){
        return c.json({error: "Invalid todo id"}, 400);
    };
    const deletedTodo = await todoRepository.deleteById(user.id, todoId);
    if (!deletedTodo){
        return c.json({error: "Todo not found"}, 404);
    };
    return c.json(deletedTodo,200);
};

export {create, readAll, readOne, update, deleteOne };