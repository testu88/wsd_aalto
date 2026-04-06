<script>
  const API_URL = "https://potterapi-fedeperin.vercel.app";
  let spells = $state([]);
  const getSpells = async () => {
    const response = await fetch(`${API_URL}/en/spells`);
    spells = await response.json();
  };
  $effect(() => {
    getSpells();
  });
  
</script>

<button onclick={getSpells}>Accio</button>
<ul>
  {#each spells as spell}
  <li>{spell.spell} : {spell.use}</li>
  {/each}
</ul>
