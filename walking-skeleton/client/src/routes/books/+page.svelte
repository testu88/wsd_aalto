<script>
    import {initBooks} from "$lib/states/bookState.svelte.js";
    import BookList from "$lib/components/books/BookList.svelte";
    import BookForm from "$lib/components/books/BookForm.svelte";

    $effect(()=> {
        initBooks();
    });
</script>

<h1>Books</h1>
<BookList />

<h2>Add a Book</h2>
<BookForm />
