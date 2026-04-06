<script>
    import {useTodoState} from "$lib/states/todoState.svelte";
    let todoState = useTodoState();
    
    const addTodo = (e) => {
        e.preventDefault();
        const todo = Object.fromEntries(new FormData(e.target));
        todoState.addTodo(todo);
        e.target.reset();
    }
</script>

<form onsubmit={addTodo}>
    <label>
        Todo name:
        <input type="text" id="name" name="name" placeholder="Add a todo" />
    </label>
    <input type="submit" value="Add Todo">
</form>

