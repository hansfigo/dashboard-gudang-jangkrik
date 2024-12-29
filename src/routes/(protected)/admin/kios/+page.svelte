<script lang="ts">
	import type { PageData } from './$types';
	import AdminTableCrud from '$lib/components/AdminTableCrud.svelte';
	import type { TableCrudAction } from '$lib/types';
	import { Button } from 'flowbite-svelte';

	let { data }: { data: PageData } = $props();

	const columns = [
		{ label: 'Name', key: 'name' },
		{ label: 'Alamat', key: 'address' },
		{ label: 'No Telp', key: 'phone' }
	];

	const actions: TableCrudAction[] = [
		{ label: 'Edit', color: 'green', href: 'kios/update/{id}' },
		{ label: 'Delete', color: 'red', href: '' }
	];
</script>

<div class="flex justify-between w-full mb-4 items-center">
	<h1 class="text-2xl font-bold">{data.title}</h1>
	<Button href="kios/add">Tambah +</Button>
</div>

<AdminTableCrud deleteAction="/admin/kios/delete/" {actions} {columns} data={data.stores} />
