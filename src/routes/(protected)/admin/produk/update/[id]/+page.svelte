<script lang="ts">
	import AdminFormCrud from '$lib/components/AdminFormCrud.svelte';
	import type { Field } from '$lib/types';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const fields: Field[] = [
		{
			id: 'name',
			label: 'Nama Produk',
			type: 'text',
			required: true
		}
	];
</script>

<AdminFormCrud title="Tambah Produk" {fields} data={data.product} submitButton="Update" />
