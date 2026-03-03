<script>
    import {page} from "$app/state";
</script>

<p>book {page.params.bookId}, chapter {page.params.chapterId}</p>

{#if page.params.chapterId === 2}
<p>Chapter is 2</p>
{:else}
<p>Chapter is not 2</p>
{/if}