<script>
    import {page} from "$app/state";
    import Todo from "$lib/components/todos/Todo.svelte";
    import TaskForm from "$lib/components/todos/TaskForm.svelte";
    import TaskList from "$lib/components/todos/TaskList.svelte";
    import { initTodoTasks } from "$lib/states/taskState.svelte.js";
    import { initTodo } from "$lib/states/todoState.svelte.js";
    let todoId = $derived(parseInt(page.params.todoId));
    $effect(()=>{
        initTodo(todoId);
        initTodoTasks(todoId);
    });
</script>   


<Todo todoId={todoId} />
<TaskList todoId={todoId} />
<TaskForm todoId={todoId} />