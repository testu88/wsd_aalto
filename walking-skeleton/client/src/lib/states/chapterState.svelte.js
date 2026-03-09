import {browser} from "$app/environment";
const KEY = "chapters";
let initialChapters = {};
if (browser && localStorage.getItem(KEY) !== null){
  initialChapters = JSON.parse(localStorage.getItem(KEY));
};
let chapterState = $state(initialChapters);

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

const saveChapters = () => {
  localStorage.setItem(KEY, JSON.stringify(chapterState));
};


const useChapterState = () => {
    return {
        get chapters() {
            return chapterState;
        },
        addChapter: (id, chapter) => {
           if (!chapterState[id]){
            chapterState[id] = [];
           };
           chapterState[id].push({
            id: chapterState[id].length +1,
            name: chapter,
           });
           saveChapters();
        }
    };
};

export {useChapterState};