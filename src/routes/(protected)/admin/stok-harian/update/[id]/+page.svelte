<script lang="ts">
	import type { PageData } from './$types';
	import AdminFormCrud from '$lib/components/AdminFormCrud.svelte';
	import type { Field } from '$lib/types';

	let { data }: { data: PageData } = $props();

	let dailyStockFields: Field[] = [
		{ id: 'date', label: 'Date', type: 'date', required: true },
		{ id: 'productId', label: 'Product ID', type: 'number', required: true },
		{ id: 'receivedStock', label: 'Received Stock', type: 'number', required: true },
		{ id: 'remainingStock', label: 'Remaining Stock', type: 'number', required: false },
	];
</script>

<AdminFormCrud title="Update Store" fields={dailyStockFields} data={data.stock} action="?/update" />
