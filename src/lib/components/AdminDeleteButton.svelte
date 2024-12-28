<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from 'flowbite-svelte';

	let { action, message }: { action: string; message: string } = $props();

	let dialog: HTMLDialogElement;

	function close(event: Event) {
		event.preventDefault();
		dialog.close();
	}
</script>

<Button title="Delete Post" color="red" onclick={() => dialog.show()}>Delete</Button>

<dialog
	bind:this={dialog}
	class="w-3/4 rounded border shadow dark:border-zinc-700 dark:bg-zinc-800 dark:text-white/90 md:w-1/2"
>
	<form {action} method="post" onsubmit={() => dialog.close()} use:enhance>
		<div class="p-6">
			<p>{@html message}</p>
		</div>
		<div class="flex w-full justify-end gap-4 bg-zinc-50 p-4 text-sm dark:bg-zinc-900">
			<button class="hover:underline" onclick={close}>No</button>
			<button type="submit" class="font-bold hover:underline">Yes</button>
		</div>
	</form>
</dialog>
