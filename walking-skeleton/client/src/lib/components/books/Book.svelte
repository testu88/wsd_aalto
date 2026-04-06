<script>
    import ChapterList from "./ChapterList.svelte";
    import {useBookState} from "$lib/states/bookState.svelte";

    let {bookId} = $props();
    let bookState = useBookState();
    const book = $derived(bookState.getOne(bookId));
</script>

{#if book}
    <h1>{book.title}</h1>
   <p> <strong>Description: </strong>  {book.description}</p>
    <p><strong>Published at:</strong>  {book.published_at}</p>
    <p><strong>Page Count: </strong>   {book.page_count}</p>
{:else}
    <p>Loading...</p>
{/if}
<ChapterList {bookId} />