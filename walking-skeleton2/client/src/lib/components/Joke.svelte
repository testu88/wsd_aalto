<script>
  const API_URL = "https://simple-joke-api.deno.dev";
  let jokePromise = $state({});
  
  const getJoke = async () => {
    const response = await fetch(`${API_URL}`);
    await new Promise(resolve => setTimeout(resolve, 5000));
    return await response.json();
  }
  $effect(() => {
    jokePromise = getJoke();
  });
</script>

<p>Joke</p>
<button onclick={getJoke}>Load joke</button>
{#await jokePromise}
<p>Loading a joke...</p>
{:then joke}
<p>{joke.setup} : {joke.punchline}</p>
{:catch error}
<p>Error retrieving joke</p>
{/await}