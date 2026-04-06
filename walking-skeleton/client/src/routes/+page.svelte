<script>
    import {PUBLIC_API_URL} from "$env/static/public";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Spells from "$lib/components/Spells.svelte";
    import Joke from "$lib/components/Joke.svelte";
</script>




<h1>Welcome!</h1>
<a href="/todos">Go to Todos</a>
<br />
<Spells />
<Joke />

