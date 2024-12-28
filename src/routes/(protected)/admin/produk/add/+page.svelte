<script lang="ts">
	import AdminFormCrud from '$lib/components/AdminFormCrud.svelte';
	import type { Field } from '$lib/types';

	const fields: Field[] = [
		{
			id: 'name',
			label: 'Nama Produk',
			type: 'text',
			required: true
		},
	];
</script>

<AdminFormCrud title="Tambah Produk" {fields} submitButton="Create" />
