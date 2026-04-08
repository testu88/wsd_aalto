import * as bookRepository from "./bookRepository.js";

const create = async (c) => {
    const bookId = Number(c.req.param("bookId"));
    if (!Number.isInteger(bookId)){
        return c.json({error: "Invalid book id"}, 400);
    };
    const data = await c.req.json();
    if (!data.title || !data.description || !data.published_at || !data.page_count){
        return c.json({error: "Missing required fields"}, 400);
    };
    const newBook = await bookRepository.createBook(data);
    return c.json(newBook, 201);
};

const readAll = async (c) => {
    const chapters = await bookRepository.readBooks();
    return c.json(chapters);
};

const readOne = async (c) => {
    const bookId = Number(c.req.param("bookId"));
    if (!Number.isInteger(bookId)){
        return c.json({error: "Invalid book id"},400);
    };
    
    const book = await bookRepository.readBook(bookId);
    if (!book){
        return c.json({error: "Book not found"}, 404);
    };
    return c.json(book);
};

const update = async (c) => {
    const bookId = Number(c.req.param("bookId"));
    if (!Number.isInteger(bookId)){
        return c.json({error: "Invalid book id"}, 400);
    };
    
    const data = await c.req.json();
    if (!data.description || !data.title || !data.published_at || !data.page_count){
        return c.json({error: "Missing required fields"}, 400);
    };
    const updatedBook = await bookRepository.update(bookId, data);
    if (!updatedBook){
        return c.json({error: "Book not found"}, 404);
    };
    return c.json(updatedBook);
};

const deleteOne = async (c) => {
    const bookId = Number(c.req.param("bookId"));
    if (!Number.isInteger(bookId)){
        return c.json({error: "Invalid book id"}, 400);
    };
    
    const deletedBook = await bookRepository.deleteOne(bookId);
    if (!deletedBook){
        return c.json({error: "Book not found"}, 404);
    };
    return c.json(deletedBook);
};

export { create, readAll, readOne, update, deleteOne };
