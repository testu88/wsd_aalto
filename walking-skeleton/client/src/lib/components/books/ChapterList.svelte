<script>
    let {bookId} = $props();
    import {useChapterState} from "$lib/states/chapterState.svelte.js";

    let chapterState = useChapterState();
    let chapters = $derived(chapterState.chapters[bookId]);
    const handleReset = () => {
        chapterState.reset();
    };
</script>

<h2>Chapters</h2>
<ul>
    {#each chapters as chapter}
    <li>
        <a href={`/books/${bookId}/chapters/${chapter.id}`}> Chapter Id: {chapter.id} : {chapter.chapter_number}. {chapter.title} ({chapter.content.length} characters)</a>
    </li>
    {/each}
</ul>
<button onclick={handleReset}>Reset</button>