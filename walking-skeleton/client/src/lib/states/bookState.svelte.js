import {browser} from "$app/environment";
const KEY = "books";
let initialBooks = [];
if (browser && localStorage.getItem(KEY) !== null){
    initialBooks = JSON.parse(localStorage.getItem(KEY));
}
let bookState = $state(initialBooks);

/*let bookState = $state([
  { id: 1, name: "HTML for Hamsters" },
  { id: 2, name: "CSS: Cannot Style Sandwiches" },
  { id: 3, name: "JavaScript and the Fifty Shades of Errors" },
]);*/

const saveBooks = () => {
    localStorage.setItem(KEY, JSON.stringify(bookState));
};

const useBookState = () => {
    return {
        get books() {
            return bookState;
        },
        getOne: (id) => {
            return bookState.find((b) => b.id === id);
        },
        addBook: (name) => {
            bookState.push({id: bookState.length + 1, name});
            saveBooks();
        },
        deleteBook: (id) => {
            bookState = bookState.filter((b) => b.id != id);
            saveBooks();
        }
    };
};

export {useBookState};