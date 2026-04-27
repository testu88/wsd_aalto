import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import * as bookController from "./bookController.js";
import * as chapterController from "./chapterController.js";
import * as todoController from "./todoController.js";
import * as taskController from "./taskController.js";
import * as authController from "./authController.js";
import * as middlewares from "./middlewares.js";
import * as readingProgressController from "./readingProgressController.js";
import * as userController from "./userController.js";


const app = new Hono();
app.use("/*", cors());
app.use("/*", logger());




// ROUTES

// Admin-only 
app.use("/api/admin/*", middlewares.authenticate, middlewares.requireAnyRole("ADMIN"));
app.get("/api/admin/users", userController.getAllUsers);
app.get("/api/admin/stats", userController.getStats);

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
app.use("/api/todos/*", middlewares.authenticate);
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

// Secret
app.use("/api/secret", middlewares.authenticate);
app.get("/api/secret", (c) => {
    return c.json({ message: "This is a secret message!"});
});

// Reading Progress
app.use("/api/reading-progress/*", middlewares.authenticate);
app.get("/api/reading-progress", readingProgressController.getUserProgress);
app.get("/api/reading-progress/book/:bookId", readingProgressController.getUserProgressForBook);
app.post("api/reading-progress/book/:bookId", readingProgressController.createOrUpdateProgress);
app.delete("api/reading-progress/book/:bookId", readingProgressController.deleteProgress);


export default app;