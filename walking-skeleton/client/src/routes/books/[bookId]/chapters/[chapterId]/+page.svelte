<script>
    import {page} from "$app/state";
    import Chapter from "$lib/components/books/Chapter.svelte";
    
    let bookId = $derived(parseInt(page.params.bookId));
    let chapterId = $derived(parseInt(page.params.chapterId));
</script>


<Chapter bookId={bookId} chapterId={chapterId} />
<!--
<p>book {page.params.bookId}, chapter {page.params.chapterId}</p>

{#if page.params.chapterId === 2}
<p>Chapter is 2</p>
{:else}
<p>Chapter is not 2</p>
{/if}
-->