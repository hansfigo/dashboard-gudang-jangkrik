<script lang="ts">
	import AdminTableCrud from '$lib/components/AdminTableCrud.svelte';
	import { Button } from 'flowbite-svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const columns = [
		{ label: 'Tanggal', key: 'date' },
		{ label: 'ProductId', key: 'productId' },
		{ label: 'Stok', key: 'receivedStock' }
	];

	const actions = [
		{ label: 'Edit', color: 'green', href: 'stok-harian/update/{id}' },
		{ label: 'Delete', color: 'red', href: 'stok-harian/delete/{id}' }
	];
</script>

<div class="mb-4 flex w-full items-center justify-between">
	<h1 class="text-2xl font-bold">{data.title}</h1>
	<Button href="stok-harian/add">Tambah +</Button>
</div>

<!-- Gunakan CrudTable dengan data yang sesuai -->
<AdminTableCrud
	deleteAction="/admin/stok-harian/delete/"
	{columns}
	data={data.stokHarian}
	{actions}
/>
