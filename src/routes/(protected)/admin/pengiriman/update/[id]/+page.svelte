<script lang="ts">
	import type { PageData } from './$types';
	import AdminFormCrud from '$lib/components/AdminFormCrud.svelte';
	import type { Field } from '$lib/types';

	let { data }: { data: PageData } = $props();

	const fields: Field[] = [
		{
			id: 'date',
			label: 'Tanggal Pengiriman',
			type: 'date',
			required: true
		},
		{
			id: 'storeId',
			label: 'ID Toko',
			type: 'number',
			required: true
		},
		{
			id: 'productId',
			label: 'ID Produk',
			type: 'number',
			required: true
		},
		{
			id: 'amount',
			label: 'Jumlah Barang',
			type: 'number',
			required: true
		},
		{
			id: 'totalPrice',
			label: 'Total Harga',
			type: 'number',
			required: true
		}
	];
</script>

<AdminFormCrud title="Update Store" {fields} data={data.delivery} action="?/update" />
