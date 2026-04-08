import {browser} from "$app/environment";
import * as booksApi from "$lib/apis/booksApi.js";

let bookState = $state([]);

const initBooks = async () => {
    if (browser){
         bookState = await booksApi.readBooks();
    };
};

const initBook = async (id) => {
    if (browser){
        const book = await booksApi.readBook(id);
        if (book && !bookState.find((b)=> b.id === id)){
            bookState.push(book);
        };
    };
};

/*const KEY = "books";
let initialBooks = [];
if (browser && localStorage.getItem(KEY) !== null){
    initialBooks = JSON.parse(localStorage.getItem(KEY));
}
let bookState = $state(initialBooks);

let bookState = $state([
  { id: 1, name: "HTML for Hamsters" },
  { id: 2, name: "CSS: Cannot Style Sandwiches" },
  { id: 3, name: "JavaScript and the Fifty Shades of Errors" },
]);

const saveBooks = () => {
    localStorage.setItem(KEY, JSON.stringify(bookState));
};*/

const useBookState = () => {
    return {
        get books() {
            return bookState;
        },
        addBook: (book) => {
           booksApi.createBook(book).then((newBook) => {
            bookState.push(newBook);
           });
        },
        deleteById: async (id) => {
            const removed =  await booksApi.deleteBook(id);
            bookState = bookState.filter((b) => b.id !== removed.id);
        },
        updateById: (book) => {
            booksApi.updateBook(book.id, book).then((updatedBook) => {
                const index = bookState.findIndex((b) => b.id === updatedBook.id);
                if (index !== -1){
                    bookState[index] = updatedBook;
                };
            });
        },
    };
};

export {initBook, initBooks, useBookState};