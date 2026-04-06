<script>
    import {page} from "$app/state";
    let bookId = $derived(parseInt(page.params.bookId));
    let chapterId = $derived(parseInt(page.params.chapterId));
    import Chapter from "$lib/components/books/Chapter.svelte";
</script>


<Chapter bookId={bookId} chapterId={chapterId}/>