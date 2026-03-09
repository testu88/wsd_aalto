<script>
    let {bookId} = $props();
    import {useChapterState} from "$lib/states/chapterState.svelte";

    let chapterState = useChapterState();

    let chapterName = $state("");
    const addChapter = () => {
        chapterState.addChapter(bookId, chapterName);
        chapterName = "";
    }
</script>

<input type="text" bind:value={chapterName} placeholder="Chapter name" />
<button onclick={addChapter}>Add Chapter</button>