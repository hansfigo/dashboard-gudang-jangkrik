<script lang="ts">
	import AdminTableCrud from '$lib/components/AdminTableCrud.svelte';
	import { Button } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { dateHelper } from '$lib/helper/dateHelper';

	let { data }: { data: PageData } = $props();
	const columns = [
		{ label: 'Tanggal', key: 'date' },
		{ label: 'Store', key: 'storeId' },
		{ label: 'Product', key: 'productId' },
		{ label: 'Jumlah', key: 'amount' },
		{ label: 'Total Harga', key: 'totalPrice' },
		{ label: 'Status Pembayaran', key: 'paymentStatus' }
	];
	const actions = [
		{ label: 'Edit', color: 'green', href: 'pengiriman/update/{id}' },
		{ label: 'Delete', color: 'red', href: 'pengiriman/delete/{id}' }
	];

	const deliveriesData = $derived(data.deliveries);

	const dateNow = dateHelper.toYYYYMMDD(new Date());
</script>

<div class="mb-4 flex w-full items-center justify-between">
	<h1 class="text-2xl font-bold">{data.title}</h1>
	<Button href="pengiriman/add">Tambah +</Button>
</div>
<div class="mb-4">
	<Button href="/admin/pengiriman/?date={dateNow}">Hari Ini</Button>
	<Button href="/admin/pengiriman/">Reset</Button>
</div>
<AdminTableCrud
	deleteAction="/admin/pengiriman/delete/"
	{columns}
	data={deliveriesData}
	{actions}
/>
