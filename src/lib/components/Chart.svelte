<script>
	// @ts-nocheck

	import { Chart, Card, A, Button, Dropdown, DropdownItem, Popover } from 'flowbite-svelte';
	import {
		InfoCircleSolid,
		ChevronRightOutline,
		ChevronDownOutline,
		FileLinesSolid
	} from 'flowbite-svelte-icons';

	const { weeklyChartData } = $props();

	console.log(weeklyChartData);

	let options = {
		chart: {
			height: '400px',
			maxWidth: '100%',
			type: 'line',
			fontFamily: 'Inter, sans-serif',
			dropShadow: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		tooltip: {
			enabled: true,
			x: {
				show: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			width: 6,
			curve: 'smooth'
		},
		grid: {
			show: true,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: -26
			}
		},
		series: [
			{
				name: weeklyChartData.series[0].name,
				data: weeklyChartData.series[0].data,
				color: '#1A56DB'
                
			}
		],
		legend: {
			show: false
		},
		xaxis: {
			categories: weeklyChartData.categories,
			labels: {
				show: true,
				style: {
					fontFamily: 'Inter, sans-serif',
					cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
				}
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		},
		yaxis: {
			show: false
		}
	};
</script>

{#if weeklyChartData}
	<Chart {options} />
{/if}
