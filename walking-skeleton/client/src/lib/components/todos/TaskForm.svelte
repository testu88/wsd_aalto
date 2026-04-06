<script>
    let {todoId} = $props();
    import {useTaskState} from "$lib/states/taskState.svelte";
    let taskState = useTaskState();
    
    const addTask = (e) => {
        e.preventDefault();
        const task = Object.fromEntries(new FormData(e.target));
        taskState.addTask(todoId, task);
        e.target.reset();
    };
</script>

<form onsubmit={addTask}>
    <label>
        Task description:
        <input type="text" id="description"name="description" placeholder="Add a description"/>
    </label>
    <label>
        Is done:
        <input type="checkbox" id="is_done" name="is_done" />
    </label>
    <input type="submit" value="Add Task" />
</form>
