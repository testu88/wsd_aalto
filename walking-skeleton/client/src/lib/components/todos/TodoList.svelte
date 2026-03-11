<script>
    import {useTodoState} from "$lib/states/todoState.svelte";
    let todoState = useTodoState();
    
</script>


<h1>Todos</h1>
<ul>
    {#each todoState.todos as todo}
    {#if todo}
    <li>
        <a href={`/todos/${todo.id}`}>{todo.name}</a>
        <button onclick={() => todoState.removeTodo(todo.id)}>Remove</button>
    </li>
    {:else}
    <p>Loading...</p>
    {/if}
    {/each}
</ul>