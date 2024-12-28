<script lang="ts">
	import type { PageData } from './$types';
	import AdminFormCrud from '$lib/components/AdminFormCrud.svelte';
	import type { Field } from '$lib/types';

	let { data }: { data: PageData } = $props();

	let kiosFields: Field[] = [
		{ id: 'name', label: 'Name', type: 'text', required: true },
		{ id: 'address', label: 'Address', type: 'text', required: true },
		{ id: 'phone', label: 'Phone', type: 'text', required: true },
		{ id: 'googlemapslink', label: 'Google Map', type: 'text' }
	];
</script>

<AdminFormCrud title="Update Store" fields={kiosFields} data={data.store} action="?/update" />
