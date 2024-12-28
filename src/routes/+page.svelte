<script>
	import { Button } from 'flowbite-svelte';

	// Mengubah items menjadi objek dengan name dan url
	const items = [
		{ name: 'Home', url: '/' },
		{ name: 'Features', url: '/#' },
		{ name: 'GitHub', url: 'https://github.com/seimbang-in' },
		{ name: 'Contact', url: '/#' }
	];
</script>

<svelte:head>
	<title>Seimbang-in</title>
	<meta name="description" content="Smart Money, Balanced Money" />
</svelte:head>

<navbar class="fixed flex w-full justify-center">
	<div class="container hidden px-4 py-4 md:block">
		<div class="grid grid-cols-4">
			{#each items as { name, url }}
				<div class="flex justify-center border-r-2 p-4">
					<a href={url}>{name}</a>
				</div>
			{/each}
		</div>
	</div>
</navbar>

<div class="flex h-screen items-center justify-center">
	<main class="container flex w-full items-center justify-between px-12">
		<div class="col flex flex-col items-start justify-start">
			<p class="text-xl">Seimbang-in</p>
			<h1 class="text-[3rem] font-black">Smart Money, Balanced Money</h1>
			<br />
			<Button
				class="bg-emerald-400 text-lg transition-all duration-300 ease-in-out hover:bg-emerald-500"
				>Try it now</Button
			>
		</div>
		<div>
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img src="./hero-img.png" alt="Hero Image" class="floating-img" />
		</div>
	</main>
</div>

<footer class="fixed bottom-4 flex w-full justify-center">
	<p>© 2024 Seimbang-in. All rights reserved.</p>
</footer>

<style>
	.floating-img {
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
