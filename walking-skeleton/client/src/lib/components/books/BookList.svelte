<script>
    import {useBookState} from "$lib/states/bookState.svelte";
    import { readBooks } from "$lib/apis/booksApi";
    let bookState = useBookState();
    const removeBook = (id) => {
        bookState.deleteById(id);
    };
    let books = $state([]);
    const loadBooks = async () => {
       books =  await readBooks();
    };
    $effect(() => {
        loadBooks();
    });
</script>


<ul>
    {#each bookState.books as book}
    {#each books as book}
    <li>
        <a href={`/books/${book.id}`}>{book.title}</a>
        <button onclick={() => removeBook(book.id)}>delete</button>
    </li>
    {/each}
    {/each}
</ul>