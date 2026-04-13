import {browser} from "$app/environment";
import * as chaptersApi from "$lib/apis/chaptersApi.js";

/*const KEY = "chapters";
let initialChapters = {};
if (browser && localStorage.getItem(KEY) !== null){
  initialChapters = JSON.parse(localStorage.getItem(KEY));
};

const saveChapters = () => {
  localStorage.setItem(KEY, JSON.stringify(chapterState));
};*/
let chapterState = $state({});

const initBookChapters = async (bookId) => {
  if (!browser) {return;};
  chapterState[bookId] = await chaptersApi.readChapters(bookId);
};

/*let chapterState = $state({
  1: [
    { id: 1, name: "Hamster Homes" },
    { id: 2, name: "Tiny Tables" },
    { id: 3, name: "Forms & Seeds" },
  ],
  2: [
    { id: 1, name: "Styling Bread" },
    { id: 2, name: "Decorating Lettuce" },
    { id: 3, name: "Advanced Pickles" },
    { id: 4, name: "Garnish Mastery" },
  ],
  3: [
    { id: 1, name: "Oops 101" },
    { id: 2, name: "Many Errors" },
    { id: 3, name: "Fifty More Bugs" },
  ],
});*/


const useChapterState = () => {
    return {
        get chapters() {
            return chapterState;
        },
        addChapter: (id, chapter) => {
        chaptersApi.createChapter(id, chapter).then((newChapter) => {
          const chapters = chapterState[id] || [];
          chapters.push(newChapter);
          chapterState[id] = chapters;
        });
        },
        reset: () => {
          localStorage.clear();
        }
    };
};

export {initBookChapters, useChapterState};