<script>
  let {todoId } = $props();
  import {useTaskState} from "$lib/states/taskState.svelte";
  let taskState = useTaskState();
  
</script>


<ul>
    {#each taskState.tasks[todoId] as task}
    {#if task}
    <li>
        <a href={`/todos/${todoId}/tasks/${task.id}`}>{task.name}</a>
        <button onclick={() => taskState.removeTask(todoId,task.id)}>Remove</button>
    </li>
    {:else}
    <p>Loading...</p>
    {/if}
    {/each}
</ul>