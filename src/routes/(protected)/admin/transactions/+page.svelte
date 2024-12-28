<script lang="ts">
	import { formatDate, formatToRupiah } from '$lib/helper/formatter';
	import type { DetailedTransaction } from '$lib/server/types';
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

	const transactions: DetailedTransaction[] = data.transactions;
</script>

<svelte:head>
	<title>Transactions</title>
</svelte:head>

{#if transactions}
	<h3 class="text-xl">Transactions</h3>
	<br />
	<Table class="w-full">
		<TableHead>
			<TableHeadCell>Email</TableHeadCell>
			<TableHeadCell>Created At</TableHeadCell>
			<TableHeadCell>Amount</TableHeadCell>
			<TableHeadCell>Category</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#each transactions as transaction}
				<TableBodyRow>
					<TableBodyCell>{transaction.users.email}</TableBodyCell>
					<TableBodyCell>{formatDate(transaction.createdAt)}</TableBodyCell>
					<TableBodyCell>{formatToRupiah(Number(transaction.amount))}</TableBodyCell>
					<TableBodyCell>{transaction.category == '1' ? 'Income' : 'Outcome'}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
{/if}
