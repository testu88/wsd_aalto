<script>
    let {bookId} = $props();
    import {useChapterState} from "$lib/states/chapterState.svelte";

    let chapterState = useChapterState();

    let name = $state("");
    const addChapter = (name) => {
        chapterState.addChapter(bookId, name);
        name = "";
    }
</script>

<input type="text" bind:value={name} placeholder="Chapter name" />
<button onclick={() => addChapter(name)}>Add Chapter</button>