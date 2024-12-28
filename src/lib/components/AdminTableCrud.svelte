<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Button
	} from 'flowbite-svelte';
	import AdminDeleteButton from './AdminDeleteButton.svelte';

	export let columns: { label: string; key: string }[] = []; // Menyimpan nama kolom dan key untuk data
	export let data: Record<string, any>[] = []; // Data tabel
	export let actions: {
		label: string;
		color:
			| 'blue'
			| 'green'
			| 'red'
			| 'yellow'
			| 'purple'
			| 'light'
			| 'dark'
			| 'primary'
			| 'none'
			| 'alternative';
		href: string;
	}[] = []; // Aksi CRUD seperti Edit, Delete
</script>

<Table>
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
				<TableBodyCell>
					{#each actions as action}
						{#if action.color === 'red'}
							<AdminDeleteButton
								action="produk/delete/{item.id}/"
								message="Are you sure you want to delete this item?"
							/>
						{:else}
							<Button href={action.href.replace('{id}', item.id)} color={action.color}
								>{action.label}</Button
							>
						{/if}
					{/each}
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
