<script>
    let {bookId} = $props();
    import {useChapterState} from "$lib/states/chapterState.svelte.js";

    let chapterState = useChapterState();
</script>

<h1>Book {bookId}</h1>
<ul>
    {#each chapterState.chapters[bookId] as chapter}
    <li>
        <a href={`/books/${bookId}/chapters/${chapter.id}`}> Chapter {chapter.id} {chapter.name}</a>
    </li>
    {/each}
</ul>