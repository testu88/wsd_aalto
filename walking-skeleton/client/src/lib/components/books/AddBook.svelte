<script>
    import {useBookState} from "$lib/states/bookState.svelte";

    let bookState = useBookState();
    let bookName = $state("");

    const addBook = () => {
        bookState.addBook(bookName);
        bookName = "";
    }
</script>

<input type="text" bind:value={bookName} placeholder="Add book name" />
<button onclick={addBook}>Add Book</button>