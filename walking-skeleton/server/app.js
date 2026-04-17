import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import * as bookController from "./bookController.js";
import * as chapterController from "./chapterController.js";
import * as todoController from "./todoController.js";
import * as taskController from "./taskController.js";
import * as authController from "./authController.js";


const app = new Hono();
app.use("/*", cors());
app.use("/*", logger());




// ROUTES

// User
app.post("/api/auth/register", authController.register);
app.post("/api/auth/login", authController.login);

// Books
app.get("/api/books", bookController.readAll);
app.get("/api/books/:bookId", bookController.readOne);
app.post("/api/books", bookController.create);
app.delete("/api/books/:bookId", bookController.deleteOne);
app.put("/api/books/:bookId", bookController.update);

// Chapters
app.get("/api/books/:bookId/chapters", chapterController.readAll);
app.get("/api/books/:bookId/chapters/:chapterId", chapterController.readOne);
app.post("/api/books/:bookId/chapters", chapterController.create);
app.delete("/api/books/:bookId/chapters/:chapterId", chapterController.deleteOne);
app.put("/api/books/:bookId/chapters/:chapterId", chapterController.update);

// Todos
app.get("/api/todos", todoController.readAll);
app.get("/api/todos/:todoId",  todoController.readOne);
app.post("/api/todos", todoController.create);
app.put("/api/todos/:todoId",  todoController.update);
app.delete("/api/todos/:todoId",  todoController.deleteOne);

// Posts
app.post("/api/todos/:todoId/tasks", taskController.create);
app.get("/api/todos/:todoId/tasks", taskController.readAll);
app.get("/api/todos/:todoId/tasks/:taskId", taskController.readOne);
app.put("/api/todos/:todoId/tasks/:taskId", taskController.update);
app.delete("/api/todos/:todoId/tasks/:taskId", taskController.deleteOne);





export default app;