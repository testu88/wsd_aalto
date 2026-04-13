<script>
    let {bookId, chapterId} = $props();

    import { useBookState } from "$lib/states/bookState.svelte";
    import {useChapterState } from "$lib/states/chapterState.svelte";

    let bookState = useBookState();
    let chapterState = useChapterState();
    let chapter = $derived(chapterState.chapters[bookId]?.find((c) => c.id === chapterId));

</script>

{#if chapter }
<h2>{chapter.title}</h2>
<p>{chapter.content}</p>
{:else}
<p>Loading...</p>
{/if}
