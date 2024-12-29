<script lang="ts">
	import AdminTableCrud from '$lib/components/AdminTableCrud.svelte';
	import type { TableCrudAction } from '$lib/types';
	import { Button } from 'flowbite-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const columns = [
		{ label: 'Name', key: 'name' },
		{ label: 'Created At', key: 'createdAt' }
	];

	const actions: TableCrudAction[] = [
		{ label: 'Edit', color: 'green', href: 'produk/update/{id}' },
		{ label: 'Delete', color: 'red', href: 'produk/delete/{id}' }
	];
</script>

<div class="mb-4 flex w-full items-center justify-between">
	<h1 class="text-2xl font-bold">{data.title}</h1>
	<Button href="produk/add">Tambah +</Button>
</div>

<!-- Gunakan CrudTable dengan data yang sesuai -->
<AdminTableCrud deleteAction="/admin/produk/delete/" {columns} data={data.products} {actions} />
