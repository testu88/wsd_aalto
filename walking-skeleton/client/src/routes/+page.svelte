<script>
    import {PUBLIC_API_URL} from "$env/static/public";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";


    let todos = $state([]);
    let text = $state("");
    let isChecked = $state(false);
    let countState = $state({
        count: 0,
        note: "single digit",
        numbers: [],
    });

    /*const textChanged = (event) => {
        text = event.target.value;
    }*/

    const increment = () => {
        countState.count++;

        countState.numbers.push(countState.count);

        if (countState.count > 9) {
            countState.note = "not single digit";
        }
    };


    const fetchTodos = async () => {
        const response = await fetch(`${PUBLIC_API_URL}/api/todos`);
        const data = await response.json();
        todos = data; 
    };
    $effect(()=> {
        fetchTodos();
    })
</script>


<Header />

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
{/if}


<h1>Todos</h1>

<ul>
    {#each todos as todo}
    <li>{todo.name}</li>
    {/each}
</ul>

<Footer />