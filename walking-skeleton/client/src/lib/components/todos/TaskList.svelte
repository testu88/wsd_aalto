<script>
  let {todoId } = $props();
  import {useTaskState} from "$lib/states/taskState.svelte";
  let taskState = useTaskState();
  const toggleDone = (task) => {
    taskState.toggleDone(todoId, task);
  };

</script>


<ul>
    {#each taskState.tasks[todoId] as task}
    {#if task}
    {#if task.is_done}
    <li>
        <p><s>{task.description}</s></p>
        <button onclick={() => taskState.removeTask(todoId,task.id)}>Remove</button>
        <button onclick={() => toggleDone(task)}>Mark not done</button>
    </li>
    {:else}
    <li>
        <a href={`/todos/${todoId}/tasks/${task.id}`}>{task.description}</a>
        <button onclick={() => taskState.removeTask(todoId,task.id)}>Remove</button>
        <button onclick={() => toggleDone(task)}>Mark done</button>
    </li>
    {/if}
    {:else}
    <p>Loading...</p>
    {/if}
    {/each}
</ul>

<button onclick={() => taskState.resetTasks(todoId)}>Reset Tasks</button>