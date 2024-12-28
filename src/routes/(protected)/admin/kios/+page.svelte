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
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1 class="mb-4 text-2xl font-bold">{data.title}</h1>

<!-- Store Table -->
<Table>
	<TableHead>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Address</TableHeadCell>
		<TableHeadCell>Phone</TableHeadCell>
		<TableHeadCell>Actions</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each data.stores as store}
			<TableBodyRow>
				<TableBodyCell>{store.name}</TableBodyCell>
				<TableBodyCell>{store.address}</TableBodyCell>
				<TableBodyCell>{store.phone}</TableBodyCell>
				<TableBodyCell>
					<Button href="kios/update/{store.id}" color="green">Edit</Button>
					<Button href="kios/delete/{store.id}" color="red">Delete</Button>
				</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
