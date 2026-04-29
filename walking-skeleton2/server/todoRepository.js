import postgres from "postgres";

const sql = postgres();

// Repository Design Pattern
const createTodo = async (userId, todo) => {
    const result = await sql`INSERT INTO todos (user_id, name) VALUES (${userId}, ${todo.name}) RETURNING *;`;
    return result[0];
};

const deleteById = async (userId, todoId) => {
    const result = await sql`DELETE FROM todos WHERE user_id = ${userId} AND id = ${todoId} RETURNING *;`;
    return result[0];
};

const findTodos = async (userId) => {
    return await sql`SELECT * FROM todos WHERE user_id = ${userId} ORDER BY created_at DESC`;
};

const findById = async (userId, todoId) => {
    const result = await sql`SELECT * FROM todos WHERE user_id = ${userId} AND id = ${todoId}`;
    return result[0];
};

const updateById = async(userId, todoId, todo) => {
    const result = await sql`UPDATE todos SET name=${todo.name} WHERE user_id = ${userId} AND id = ${todoId} RETURNING *;`;
    if (result.length === 0) {
        return undefined;
    };
    return result[0];

};

export { findTodos, createTodo, findById, updateById, deleteById };