<script>
    import ChapterList from "./ChapterList.svelte";
    import {useBookState} from "$lib/states/bookState.svelte";

    let {bookId} = $props();
    let bookState = useBookState();
    let book = $derived(bookState.books.find((book) => book.id === bookId));
</script>

<h1>{book ? book.title : "Loading..."}</h1>
<p><strong>Description:</strong> {book.description}</p>
<p><strong>Published at:</strong> {book.published_at}</p>
<p><strong>Page count:</strong> {book.page_count}</p>
<ChapterList {bookId} />