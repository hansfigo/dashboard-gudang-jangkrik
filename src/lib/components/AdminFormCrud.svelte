<script lang="ts">
	import { enhance } from '$app/forms';
	import { Input, Label, Button } from 'flowbite-svelte';

	export let title: string = 'Create';
	export let data: Record<string, any> = {}; // Tambahkan default kosong
	export let fields: Array<{
		id: string;
		label: string;
		type:
			| 'number'
			| 'image'
			| 'text'
			| 'search'
			| 'time'
			| 'hidden'
			| 'color'
			| 'date'
			| 'datetime-local'
			| 'email'
			| 'file'
			| 'month'
			| 'password'
			| 'reset'
			| 'submit'
			| 'tel'
			| 'url'
			| 'week';
		required?: boolean;
	}>;

	export let action: string = '';
	export let submitButton: string = 'Create';
</script>

<form use:enhance method="POST" {action} class="mb-6 space-y-4">
	<h2 class="text-xl font-semibold">{title}</h2>
	{#each fields as field}
		<div>
			<Label for={field.id} class="mb-2">{field.label}:</Label>
			<Input
				type={field.type}
				id={field.id}
				name={field.id}
				required={field.required}
				value={data[field.id] || ''}
			/>
		</div>
	{/each}
	<Button type="submit">{submitButton}</Button>
</form>
