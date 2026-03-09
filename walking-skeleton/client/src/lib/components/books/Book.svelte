<script>
    import ChapterList from "./ChapterList.svelte";
    import {useBookState} from "$lib/states/bookState.svelte";

    let {bookId} = $props();
    let bookState = useBookState();
    let book = bookState.getOne(bookId);
</script>

<h1>{book.name}</h1>
<ChapterList {bookId} />