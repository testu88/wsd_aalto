<script>
    import TodoList from "$lib/components/todos/TodoList.svelte";
    import TodoForm from "$lib/components/todos/TodoForm.svelte";
    import { initTodos } from "$lib/states/todoState.svelte.js";
    $effect(()=>{
        initTodos();
    });
 </script>

<h1>Todos</h1>
<TodoList />

<h2>Add a todo</h2>
<TodoForm />