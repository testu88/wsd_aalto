<script>
    import {useBookState} from "$lib/states/bookState.svelte";
    import { initBooks } from "$lib/states/bookState.svelte";
    let bookState = useBookState();
    const removeBook = (id) => {
        bookState.deleteById(id);
    };
   
</script>


<ul>
    {#each bookState?.books as book}
    {#if book}
    <li>
        <a href={`/books/${book.id}`}>{book.title}</a>
        <button onclick={() => removeBook(book.id)}>delete</button>
    </li>
    {:else}
    <p>Loading...</p>
    {/if}
    {/each}
</ul>