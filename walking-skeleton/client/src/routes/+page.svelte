<script>
    import {PUBLIC_API_URL} from "$env/static/public";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";


    let todos = $state([]);

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


<h1>Todos</h1>

<ul>
    {#each todos as todo}
    <li>{todo.name}</li>
    {/each}
</ul>

<Footer />