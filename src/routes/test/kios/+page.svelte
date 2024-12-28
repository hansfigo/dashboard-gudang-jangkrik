<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1 class="mb-4 text-2xl font-bold">{data.title}</h1>

<!-- Store Table -->
<table class="w-full border-collapse border border-gray-300">
	<thead>
		<tr>
			<th class="border border-gray-300 p-2">Name</th>
			<th class="border border-gray-300 p-2">Address</th>
			<th class="border border-gray-300 p-2">Phone</th>
			<th class="border border-gray-300 p-2">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each data.stores as store}
			<tr>
				<td class="border border-gray-300 p-2">{store.name}</td>
				<td class="border border-gray-300 p-2">{store.address}</td>
				<td class="border border-gray-300 p-2">{store.phone}</td>
				<td class="border border-gray-300 p-2">
					<a href="kios/update/{store.id}" class="btn-secondary">Edit</a>
					<a href="kios/delete/{store.id}" class="btn-danger">Delete</a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
