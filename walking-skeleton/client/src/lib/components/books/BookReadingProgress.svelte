<script>
    import * as readingProgressApi from "$lib/apis/readingProgressApi.js";
    let { bookId } = $props();
    let currentProgress = $state(null);
    let selectedStatus = $state("want_to_read");
    let error = $state("");
    let isLoading = $state(true);
    const statusLabels = {
        want_to_read: "want to Read",
        reading: "Currently Reading",
        finished: "Finished"
    };
    const updateProgress = async () => {
        error: "";
        const response = await readingProgressApi.updateProgress(bookId, selectedStatus);
        if (!response.ok){
            error: "Failed to update reading progress. Try again.";
            return;
        };
        const data = await response.json();
        currentProgress = data;

    };
    const removeFromList = async () => {
        error = "";
        const response = await readingProgressApi.deleteProgress(bookId);
        if (!response.ok) {
            error: "Failed to remove from reading list. Try again.";
            return;
        };
        currentProgress = null;
        selectedStatus = "want_to_read";
    };
    const loadProgress = async () => {
        loading = true;
        const response = await readingProgressApi.getProgressForBook(bookId);
        if (response.ok){
            const data = await response.json();
            if (data){
                currentProgress = data;
                selectedStatus = data.status;
            };
        };
        loading = false;
    };

    $effect(() => {
        loadProgress();
    });

</script>

<h2>My Reading Progress</h2>

{#if !loading}
    {#if currentProgress}
    <p>Status <strong>{statusLabels[currentProgress.status]}</strong></p>
        <p>
            <label>
                <span>Update status:</span>
                <select bind:value={selectedStatus}>
                    <option value="want_to_read">Want to Read</option>
                    <option value="reading">Currently Reading</option>
                    <option value="finished">Finished</option>
                </select>
            </label>
        </p>
        <button onclick={updateProgress}>Update Status</button>
        <button onclick={removeFromList}>Remove from my List</button>
    {:else}
        <p>This book is not in your reading list.</p>
        <label>
            <span>Add to list as:</span>
            <select bind:value={selectedStatus}>
                <option value="want_to_read">Want to Read</option>
                <option value="reading">Currently Reading</option>
                <option value="finished">Finished</option>
            </select>
        </label>
        <button onclick={updateProgress}>Add to my List</button>
    {/if}

        {#if error}
        <p>{error}</p>
        {/if}
{/if}