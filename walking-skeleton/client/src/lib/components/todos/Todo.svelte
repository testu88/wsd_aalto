<script>
    import TaskList from "$lib/components/todos/TaskList.svelte";
    import {useTodoState} from "$lib/states/todoState.svelte";
    let {todoId} = $props();
    let todoState = useTodoState();
    let todo = $derived(todoState.getOne(todoId));

</script>

<h1>Todo {todoId} : {todo ? todo.name : "Loading..."}</h1>

<TaskList todoId={todoId}/>