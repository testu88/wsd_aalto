<script>
    import {page} from "$app/state";

    let bookId = $derived(parseInt(page.params.bookId));
    
</script>


<p>book {bookId}</p>

<!----<p>Current Book Id: {bookId}</p>
<p>Next Book Id: {bookId +1}</p>

<p><a href="/books/{bookId+1}">Next book</a></p>-->

{#if bookId === 1}
<p>book id : 1</p>
{:else}
<p>book id not 1</p>
{/if}