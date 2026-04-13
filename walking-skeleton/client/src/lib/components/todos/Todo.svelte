<script>
    import {useTodoState} from "$lib/states/todoState.svelte";
    let {todoId} = $props();
    let todoState = useTodoState();

</script>

<h1>Todo {todoId} : {todoState?.todos?.find((t) => t.id === todoId)?.name ?? "Loading..."}</h1>

