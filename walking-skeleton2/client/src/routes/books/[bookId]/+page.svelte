<script>
    import {page} from "$app/state";
    import Book from "$lib/components/books/Book.svelte";
    import ChapterList from "$lib/components/books/ChapterList.svelte";
    import ChapterForm from "$lib/components/books/ChapterForm.svelte";
    let bookId = $derived(parseInt(page.params.bookId));
    import { initBook } from "$lib/states/bookState.svelte.js";
    import { initBookChapters } from "$lib/states/chapterState.svelte.js";

    // load book and chapters when page mount
    $effect(()=>{
        initBook(bookId);
        initBookChapters(bookId);
    });
</script>

<h1>Book {bookId}</h1>
<Book bookId={bookId} />

<ChapterList bookId={bookId} />
<h2>Add a chapter</h2>
<ChapterForm bookId={bookId}/>

