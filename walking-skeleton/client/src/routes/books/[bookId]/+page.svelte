<script>
    import {page} from "$app/state";
    import Book from "$lib/components/books/Book.svelte";
    import ChapterForm from "$lib/components/books/ChapterForm.svelte";
    let bookId = $derived(parseInt(page.params.bookId));
    
</script>

<h1>Book {bookId}</h1>
<Book bookId={bookId} />

<h2>Add a chapter</h2>
<ChapterForm bookId={bookId}/>

<!---<p>book {bookId}</p>

<p>Current Book Id: {bookId}</p>
<p>Next Book Id: {bookId +1}</p>

<p><a href="/books/{bookId+1}">Next book</a></p>

{#if bookId === 1}
<p>book id : 1</p>
{:else}
<p>book id not 1</p>
{/if}-->