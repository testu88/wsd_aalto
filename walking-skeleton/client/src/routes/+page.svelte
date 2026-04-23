<script>
    import {PUBLIC_API_URL} from "$env/static/public";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    //import Spells from "$lib/components/Spells.svelte";
    //import Joke from "$lib/components/Joke.svelte";
    import { authFetch } from "$lib/utils/fetchUtils.js";
    import { useAuthState } from "$lib/states/authState.svelte.js";

    let authState =  useAuthState();
    const user = authState.user;
    let message = $state(null);
    const fetchData = async () => {
        try {
            const response = await authFetch(`${PUBLIC_API_URL}/api/secret`);
            const data = await response.json();
            message = data.message;
        } catch (error) {
            message = error.message;
        };
    };
</script>

{#if user}
<button onclick={fetchData}>Fetch Protected Data</button>
<p>Message: {message}</p>
{:else}
<p>Hello anonymous!</p>
{/if}


<h1>Welcome to the home page!</h1>
<a href="/todos">Go to Todos</a>
<br />



