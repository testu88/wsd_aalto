<script>
    let {todoId} = $props();
    import {useTaskState} from "$lib/states/taskState.svelte";
    let taskState = useTaskState();
    let text = $state("");
    
    const addTask = (task) => {
       taskState.addTask(todoId, task);
        text = "";
    };
</script>


<input type="text" bind:value={text} placeholder="Add a task" />
<button onclick={() => addTask(text)}>Add Task</button>