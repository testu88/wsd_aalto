<script>
    import {page} from "$app/state";
    import Task from "$lib/components/todos/Task.svelte";
    let todoId = $derived(parseInt(page.params.todoId));
    let taskId = $derived(parseInt(page.params.taskId));

  
</script>


<Task todoId={todoId} taskId={taskId} />

