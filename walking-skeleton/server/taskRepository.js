import postgres from "postgres";

const sql = postgres();


const createTask = async (userId, todoId, task) => {
  const getTodo = await sql`SELECT * FROM todos WHERE todos.id = ${todoId} AND todos.user_id = ${userId}`;
  if (getTodo.length === 0){
    return null;
  };
  const result = await sql`
    INSERT INTO todo_tasks (todo_id, description)
    VALUES (${todoId}, ${task.description})
    RETURNING *;`;

  return result[0];
};

const deleteById = async (userId, id) => {
   const userTodoTaskCount = await sql`SELECT COUNT(*) as count FROM todo_tasks JOIN todos ON todo_tasks.todo_id = todos.id WHERE todo_tasks.id = ${id} AND todos.user_id = ${userId}`;
  if (userTodoTaskCount[0]?.count === "0"){
    return null;
  };
  const result = await sql`
    DELETE FROM todo_tasks
    WHERE  id = ${id}
    RETURNING *;`;

  return result[0];
};

const findTasks = async (userId, todoId) => {
   const getTodo = await sql`SELECT * FROM todos WHERE todos.id = ${todoId} AND todos.user_id = ${userId}`;
  if (getTodo.length === 0){
    return null;
  };
  return await sql`
    SELECT * FROM todo_tasks
    WHERE todo_id = ${todoId};`;
};

const findById = async (userId, id) => {
   const userTodoTaskCount = await sql`SELECT COUNT(*) as count FROM todo_tasks JOIN todos ON todo_tasks.todo_id = todos.id WHERE todo_tasks.id = ${id} AND todos.user_id = ${userId}`;
  if (userTodoTaskCount[0]?.count === "0"){
    return null;
  };
  const result = await sql`
    SELECT * FROM todo_tasks
    WHERE id = ${id};`;

  return result[0];
};

const updateById = async (userId, id, task) => {
  const userTodoTaskCount = await sql`SELECT COUNT(*) as count FROM todo_tasks JOIN todos ON todo_tasks.todo_id = todos.id WHERE todo_tasks.id = ${id} AND todos.user_id = ${userId}`;
  if (userTodoTaskCount[0]?.count === "0"){
    return null;
  };
  const result = await sql`
    UPDATE todo_tasks
    SET
      description = ${task.description},
      is_done = ${task.is_done}
    WHERE  id = ${id}
    RETURNING *;`;

  return result[0];
};

export { createTask, deleteById, findTasks, findById, updateById };