<script>
    let {bookId} = $props();
    import {useChapterState} from "$lib/states/chapterState.svelte";

    let chapterState = useChapterState();

    const addChapter = (e) => {
        e.preventDefault();
        const chapter = Object.fromEntries(new FormData(e.target));
        chapterState.addChapter(bookId, chapter);
        e.target.reset();
    }
</script>


<form onsubmit={addChapter}>
  <label>
    Chapter title:
    <input type="text" id="title" name="title" placeholder="Add a chapter title" />
  </label>
  <br />
  <label>
    Content:
    <textarea id="content" name="content" placeholder="Add content"></textarea>
  </label>
  <br />
  <label>
    Chapter number:
    <input type="text" id="chapter_number" name="chapter_number" placeholder="Add a chapter number" />
  </label>
  <input type="submit" value="Add Chapter" />
</form>
