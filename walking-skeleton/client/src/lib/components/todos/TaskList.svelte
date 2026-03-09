<script>
  let {todoId } = $props();
    /*let todoTasks = {
  1: [
    { id: 1, name: 'First task of first todo' },
    { id: 2, name: 'Second task of first todo' }
  ],
  2: [
    { id: 1, name: 'First task of second todo' },
    { id: 2, name: 'Second task of second todo' }
  ],
  3: [
    { id: 1, name: 'First task of third todo' },
    { id: 2, name: 'Second task of third todo' }
  ]
};*/
  import {useTaskState} from "$lib/states/taskState.svelte";
  let taskState = useTaskState();
  taskState.resetTasks();
  taskState.tasks[todoId] ??= [];
  
  const removeTask = (id) => {
    taskState.removeTask(id);
  };
</script>


<ul>
    {#each taskState.tasks[todoId] as task}
    <li>
        <a href={`/todos/${todoId}/tasks/${task.id}`}>{task.name}</a>
        <button onclick={() => removeTask(task.id)}>Remove</button>
    </li>
    {/each}
</ul>