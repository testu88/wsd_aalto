import {browser} from "$app/environment";
import * as booksApi from "$lib/apis/booksApi.js";

let bookState = $state([]);

const initBooks = async () => {
    if (browser){
         const books = await booksApi.readBooks();
        
         if (books.error){
               
                return;
         };
         bookState = books.data;
    };
};

const initBook = async (id) => {
    if (browser){
        const book = await booksApi.readBook(id);
        if (book.error){
      
                return;
            }
        if (book.data && !bookState.find((b)=> b.id === id)){
            bookState.push(book.data);
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
        addBook: async (book) => {
            const newBook = await booksApi.createBook(book)
            if (newBook.error){
                console.error(newBook.error);
                return;
            }
            bookState.push(newBook.data);
        },
        deleteById: async (id) => {
            const removed =  await booksApi.deleteBook(id);
            if (removed.error){
                console.error(removed.error);
                return;
            };
            const index = bookState.findIndex((b) => b.id === removed.data.id);
            if (index !== -1) {
            bookState.splice(index, 1);
            };
        },
        updateById: async (book) => {
            const updatedBook = await booksApi.updateBook(book.id, book);
            if (updatedBook.error){
                console.error(updatedBook.error);
                return;
            }
            const index = bookState.findIndex((b) => b.id === updatedBook.data.id);
            if (index !== -1){
                bookState[index] = updatedBook.data;
            };
        },
        
    };
};

export {initBook, initBooks, useBookState};