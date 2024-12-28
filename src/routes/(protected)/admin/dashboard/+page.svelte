<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { formatToRupiah } from '$lib/helper/formatter';
	import Chart from '$lib/components/Chart.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<div class="flex flex-col gap-4">
	<div class="flex gap-4">
		<div>
			<Card>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Total Transaction Today
				</h5>
				<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
				</p>
			</Card>
		</div>

		<div>
			<Card>
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Sum Transaction Today
				</h5>
				<p class="font-normal leading-tight text-gray-700 dark:text-gray-400">
				</p>
			</Card>
		</div>
	</div>
	<div class="w-full flex-1">
		<h3 class="text-xl font-bold">Weekly Transactions</h3>
		<br />
		<!-- <Chart {weeklyChartData} /> -->
	</div>
</div>
