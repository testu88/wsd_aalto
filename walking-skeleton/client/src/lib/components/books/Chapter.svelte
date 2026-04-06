<script>
    let {bookId, chapterId} = $props();

    import { useBookState } from "$lib/states/bookState.svelte";
    import {useChapterState } from "$lib/states/chapterState.svelte";

    let bookState = useBookState();
    let chapterState = useChapterState();
    let book = $derived(bookState.getOne(bookId));
    let chapter = $derived(chapterState.chapters[bookId]?.find((c) => c.id === chapterId));

</script>

<h1>{book ? book.name: "Loading..."}</h1>
{#if chapter }
<h2>{chapter.title}</h2>
<p>This is chapter {chapter.id} of book {book.id}</p>
<p>{chapter.content}</p>
{:else}
<p>Loading...</p>
{/if}
