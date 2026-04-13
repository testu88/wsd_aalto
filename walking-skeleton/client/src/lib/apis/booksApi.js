import { PUBLIC_API_URL } from "$env/static/public";
import { myFetch } from "$lib/apis/myFetch.js";


const readBooks = async () => {
    const books = await myFetch(`${PUBLIC_API_URL}/api/books`);
    return books;
};

const readBook = async (id) => {
    const book =  await myFetch(`${PUBLIC_API_URL}/api/books/${id}`);
    return book;
};

const createBook = async (book) => {
    console.log("Book POST:", book);
    const newBook = await myFetch(`${PUBLIC_API_URL}/api/books`, {
        headers: { "Content-Type":"application/json", },
        method: "POST",
        body: JSON.stringify(book),
    });
    return newBook;
};

const updateBook = async (id, book) => {
    const updatedBook = await myFetch(`${PUBLIC_API_URL}/api/books/${id}`, {
        headers: { "Content-Type":"application/json", },
        method: "PUT",
        body: JSON.stringify(book),
    });
    return updatedBook;
};

const deleteBook = async (id) => {
    const deletedBook = await myFetch(`${PUBLIC_API_URL}/api/books/${id}`, {
        method: "DELETE",
    });
    return deleteBook;
};

export { deleteBook, updateBook, createBook, readBook, readBooks };
