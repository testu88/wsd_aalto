<script>
    import {useTodoState} from "$lib/states/todoState.svelte";
    let todoState = useTodoState();
    let text = $state("");
    const addTodo = (todo) => {
        todoState.addTodo(todo);
        text = "";
    }
</script>

<input type="text" bind:value={text} placeholder="Add a todo" />
<button onclick={() => addTodo(text)}>Add Todo</button>