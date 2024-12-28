<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1 class="mb-4 text-2xl font-bold">{data.title}</h1>

<!-- Create Form -->
<form method="post" action="?/update" class="mb-6 space-y-4">
	<h2 class="text-xl font-semibold">Add Store</h2>
	<div>
		<label for="name">Name:</label>
		<input value={data.store.name} type="text" id="name" name="name" required class="input-field" />
	</div>
	<div>
		<label for="address">Address:</label>
		<input
			value={data.store.address}
			type="text"
			id="address"
			name="address"
			required
			class="input-field"
		/>
	</div>
	<div>
		<label for="phone">Phone:</label>
		<input
			value={data.store.phone}
			type="text"
			id="phone"
			name="phone"
			required
			class="input-field"
		/>
	</div>
	<div>
		<label for="preference">Google Map:</label>
		<input
			value={data.store.googlemapslink || ''}
			type="text"
			id="googlemapslink"
			name="googlemapslink"
			class="input-field"
		/>
	</div>
	<button type="submit" class="btn-primary">Add Store</button>
</form>

<style>
	.input-field {
		display: block;
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	.btn-primary {
		background-color: #4caf50;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.btn-secondary {
		background-color: #ffa500;
		color: white;
		padding: 5px 10px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
	.btn-danger {
		background-color: #ff0000;
		color: white;
		padding: 5px 10px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
