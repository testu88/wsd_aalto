<script>
    import {page} from "$app/state";
    import Task from "$lib/components/todos/Task.svelte";

    let todoId = $derived(parseInt(page.params.todoId));
    let taskId = $derived(parseInt(page.params.taskId));
</script>

<!--<h1>Todo {todoId}, task {taskId}</h1>
<a href="/todos/{todoId}">Back to todo</a>-->

<Task todoId={todoId} taskId={taskId} />

