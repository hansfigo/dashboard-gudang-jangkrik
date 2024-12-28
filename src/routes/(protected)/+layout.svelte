<script lang="ts">
	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { ChartPieSolid, GridSolid, MailBoxSolid } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';

	let spanClass = 'flex-1 ms-3 whitespace-nowrap';

	let { children, data } = $props();

	let activeUrl: string = $state('');

	$effect(() => {
		activeUrl = $page.url.pathname;
	});

	// Array data sidebar
	const sidebarItems = [
		{
			href: '/admin/dashboard',
			label: 'Dashboard',
			icon: ChartPieSolid
		},
		{
			href: '/admin/kios',
			label: 'Kios',
			icon: GridSolid
		},
		{
			href: '/admin/stok-harian',
			label: 'Stok Harian',
			icon: MailBoxSolid
		},
		{
			href: '/admin/produk',
			label: 'Produk',
			icon: MailBoxSolid
		}
	];
</script>

<div class="flex h-screen flex-col">
	<Navbar user={data.user} />
	<div class="flex flex-1 overflow-hidden">
		<Sidebar {activeUrl}>
			<SidebarWrapper>
				<SidebarGroup class="h-screen">
					{#each sidebarItems as { href, label, icon }}
						<SidebarItem {href} {label} class={activeUrl == href ? 'bg-slate-200' : ''}>
							<svelte:fragment slot="icon">
								{@const Component = icon}
								<Component />
							</svelte:fragment>
						</SidebarItem>
					{/each}
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
		<main class="flex-1 overflow-y-auto px-6">
			{@render children()}
		</main>
	</div>
</div>
