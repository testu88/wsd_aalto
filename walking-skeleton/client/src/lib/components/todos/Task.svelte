<script>
    import {useTaskState} from "$lib/states/taskState.svelte";
    let {todoId, taskId} = $props();
    let taskState = useTaskState();
    let tasks = taskState.tasks[todoId];
    let task = tasks.find((t) => t.id === taskId);
</script>

<h1>Todo {todoId}, task {taskId}: {task ? task.name : "Loading..."}</h1>