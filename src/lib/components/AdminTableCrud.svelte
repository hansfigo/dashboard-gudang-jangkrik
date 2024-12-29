<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import AdminDeleteButton from './AdminDeleteButton.svelte';

	export let columns: { label: string; key: string }[] = [];
	export let data: Record<string, any>[] = [];
	export let actions: {
		label: string;
		href: string;
	}[] = [];
	export let deleteAction: string = '';
</script>

<Table shadow striped={true}>
	<TableHead>
		{#each columns as column}
			<TableHeadCell>{column.label}</TableHeadCell>
		{/each}
		<TableHeadCell>Actions</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each data as item}
			<TableBodyRow>
				{#each columns as column}
					<TableBodyCell>{item[column.key]}</TableBodyCell>
				{/each}
				<TableBodyCell class="flex gap-2">
					{#each actions as action}
						{#if action.label === 'Delete'}
							<AdminDeleteButton
								action="{deleteAction}{item.id}/"
								message="Are you sure you want to delete this item?"
							/>
						{:else}
							<a
								class="font-medium text-primary-500 hover:underline dark:text-primary-600"
								href={action.href.replace('{id}', item.id)}>{action.label}</a
							>
						{/if}
					{/each}
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
