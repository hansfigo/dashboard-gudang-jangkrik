<script lang="ts">
	import { formatToRupiah } from '$lib/helper/formatter';
	import type { PageData } from './$types';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Users</title>
</svelte:head>

<div class="flex flex-col">
	<h3 class="text-xl">Users</h3>
	<br />
	{#if data.users}
		<Table>
			<TableHead>
				<TableHeadCell>Email</TableHeadCell>
				<TableHeadCell>Username</TableHeadCell>
				<TableHeadCell>Full Name</TableHeadCell>
				<TableHeadCell>Age</TableHeadCell>
				<TableHeadCell>Balance</TableHeadCell>
			</TableHead>
			<TableBody tableBodyClass="divide-y">
				{#each data.users as user}
					<TableBodyRow>
						<TableBodyCell>{user.email}</TableBodyCell>
						<TableBodyCell>{user.username}</TableBodyCell>
					
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	{/if}
</div>
