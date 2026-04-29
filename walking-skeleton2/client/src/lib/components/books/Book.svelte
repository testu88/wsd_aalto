<script>
    import {useBookState} from "$lib/states/bookState.svelte";
    import BookReadingProgress from "./BookReadingProgress.svelte";


    let {bookId} = $props();
    let bookState = useBookState();
    let book = $derived(bookState.books.find((book) => book.id === bookId));

</script>

<h1>{book ? book.title : "Loading..."}</h1>

{#if book}
<p><strong>Description:</strong> {book.description}</p>
<p><strong>Published at:</strong> {book.published_at}</p>
<p><strong>Page count:</strong> {book.page_count}</p>

{#if authState.user}
<BookReadingProgress {bookId}/>
{:else}
<p>
    <a href="/auth/login">Log in</a> to track your reading progress.
</p>
{/if}
{/if}
