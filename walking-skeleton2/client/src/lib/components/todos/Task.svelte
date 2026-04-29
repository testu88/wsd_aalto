<script>
    import {useTaskState} from "$lib/states/taskState.svelte";
    let {todoId, taskId} = $props();
    let taskState = useTaskState();
    let task = $derived(taskState.tasks[todoId]?.find((t) => t.id === taskId));
</script>

<h1>Todo {todoId} Task {taskId}: {taskState?.tasks[todoId]?.find((t) => t.id === taskId).description ?? "Loading..."}</h1>