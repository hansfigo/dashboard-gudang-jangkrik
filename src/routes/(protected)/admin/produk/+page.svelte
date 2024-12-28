<script lang="ts">
	import AdminTableCrud from '$lib/components/AdminTableCrud.svelte';
	import type { TableCrudAction } from '$lib/types';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	console.log(data.products);

	const columns = [
		{ label: 'Name', key: 'name' },
		{ label: 'Created At', key: 'createdAt' }
	];

	const actions: TableCrudAction[] = [
		{ label: 'Edit', color: 'green', href: 'produk/update/{id}' },
		{ label: 'Delete', color: 'red', href: 'produk/delete/{id}' }
	];
</script>

<h1 class="mb-4 text-2xl font-bold">{data.title}</h1>

<!-- Gunakan CrudTable dengan data yang sesuai -->
<AdminTableCrud {columns} data={data.products} {actions} />
