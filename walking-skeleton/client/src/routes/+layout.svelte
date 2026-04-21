<script>
	import favicon from '$lib/assets/favicon.svg';
	import { useAuthState } from "$lib/states/authState.svelte.js";
	let { children } = $props();
	const authState = useAuthState();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Home</title>
</svelte:head>

<header>
	{#if authState.user}
	<div>
		<span>Hello, {authState.user.email}!</span>
		<button onclick={() => authState.logout()}>Logout</button>
	</div>
	{:else}
	<ul>
		<li><a href="/auth/login">Login</a></li>
		<li><a href="/auth/register">Register</a></li>
	</ul>
	{/if}
</header>

<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>


<main>
{@render children()}
</main>
