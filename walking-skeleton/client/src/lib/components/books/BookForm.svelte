<script>
    import {useBookState} from "$lib/states/bookState.svelte";

    let bookState = useBookState();

    const addBook = (e) => {
        e.preventDefault();

        const book = Object.fromEntries(new FormData(e.target));
        bookState.addBook(book);
        e.target.reset();
    };
</script>

<form onsubmit={addBook}>
    <label>
        Title:
        <input type="text" id="title" name="title" placeholder="Book title" />
    </label>
    <br />
    <label>
        Description:
        <textarea id="description" name="description" placeholder="Book Description"></textarea>
    </label>
    <br />
    <label>
        Published at:
        <input type="date" id="published_at" name="published_at" />
    </label>
    <br />
    <label>
        Page Count:
        <input type="number" id="page_count" name="page_count" />
    </label>
    <br />
    <input type="submit" value="Add Book" />
</form>
