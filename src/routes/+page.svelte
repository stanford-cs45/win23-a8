<script lang="ts">
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;
</script>

<svelte:head>
	<title>The World's Simplest Messageboard</title>
</svelte:head>

<h1>The World's Simplest Messageboard</h1>
<p>Type a message and the secret password to post:</p>
<form method="POST">
	<label>
		Message
		<input name="message" type="text" />
	</label>
	<label>
		Secret Password
		<input name="password" type="password" />
	</label>
	<button>Send</button>
</form>

{#if form?.success === false}
	<p style="color: red;">Password was incorrect.</p>
{/if}

<p>Messages:</p>
{#each data.messages as message}
	<div style="padding: 1rem; border: 1px solid gray; margin: 1rem;">
		{message}
	</div>
{/each}
