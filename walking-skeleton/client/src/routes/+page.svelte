<script>
    import {PUBLIC_API_URL} from "$env/static/public";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";


    /*let todos = $state([
        {id: 1, text: "Run", done: false},
        {id: 2, text: "Buy groceries", done: false},
        {id:3, text: "Sleep", done:true},
    ]);
    let changedTodos = $state([]);
    let text = $state("");
    let todoText = $state("");
    let isChecked = $state(false);
    let countState = $state({
        count: 0,
        note: "single digit",
        numbers: [],
    });

    const textChanged = (event) => {
        text = event.target.value;
    }

    const increment = () => {
        countState.count++;

        countState.numbers.push(countState.count);

        if (countState.count > 9) {
            countState.note = "not single digit";
        }
    };

    const markDone = (id) => {
        todos = todos.map((t) =>
      t.id === id ? {...t, done: true} : t
    );

    }
    const addTodo = () => {
        const item = {
            id: todos.length + 1,
            text: todoText,
            done: false,
        };
        todos.push(item);
        todoText = "";
    }

    const fetchTodos = async () => {
        const response = await fetch(`${PUBLIC_API_URL}/api/todos`);
        const data = await response.json();
        todos = data; 
    };
    $effect(()=> {
        fetchTodos();
    })*/
</script>


<!--<Header />

<p>Text : {text}</p>
<input type="text" bind:value={text} />

<p>Checkbox is: {isChecked ? "checked": "not checked"} </p>
<input type="checkbox" bind:checked={isChecked} />

<p>Count: {countState.count}, Note: {countState.note}</p>
<button onclick={increment}>Increment</button>
{#if countState.numbers === 10}
<p>You have {countState.count}</p>
{:else if countState.numbers < 9}
<p>You have less than 10.</p>
{:else}
<p>You have more than 10.</p>
{/if}-->


<h1>Welcome!</h1>
<a href="/todos">Go to Todos</a>

<!--<input type="text" bind:value={todoText} placeholder="Add a todo"/>
<button onclick={addTodo}>Add</button>
<h2>Pending</h2>
<ul>
    {#each todos.filter(todo => !todo.done) as todo}
    <li>{todo.text}
        <button onclick={() => markDone(todo.id)}>Mark Done</button>
    </li>
    {/each}
</ul>
<h2>Completed</h2>
<ul>
    {#each todos.filter(todo => todo.done) as todo}
    <li>{todo.text}</li>
    {/each}
</ul>
<Footer />-->