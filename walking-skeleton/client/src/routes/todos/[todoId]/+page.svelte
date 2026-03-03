<script>
     import {page} from "$app/state";

    let todoId = $derived(parseInt(page.params.todoId));
</script>   



<h1>Todo {todoId}</h1>
<a href="/todos/{todoId}/tasks/1">Go to first task</a>
<a href="/todos/{todoId+1}">Go to next todo</a>