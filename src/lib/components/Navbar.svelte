<script>
	import { PRODUCT_NAME } from '$lib/constant';
	import {
		Avatar,
		DarkMode,
		Dropdown,
		DropdownDivider,
		DropdownHeader,
		DropdownItem,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar,
		Search
	} from 'flowbite-svelte';

	// export let fluid = true;
	// export let drawerHidden = false;
	// export let list = false;
	export let profilePicture = 'https://avatarfiles.alphacoders.com/205/thumb-350-205300.webp';

	export let user;
</script>

<Navbar>
	<NavBrand href="/admin/dashboard">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>{PRODUCT_NAME}</span
		>
	</NavBrand>
	<div class="flex items-center md:order-2">
		<Avatar id="avatar-menu" src={profilePicture} />
	</div>
	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownHeader>
			<span class="block text-sm">{user.full_name}</span>
			<span class="block truncate text-sm font-medium">{user.email}</span>
		</DropdownHeader>
		<DropdownItem href="/admin/dashboard">Dashboard</DropdownItem>
		<DropdownItem href="/admin/users">Users</DropdownItem>
		<DropdownItem href="/admin/transactions">Transactions</DropdownItem>
		<DropdownDivider />
		<DropdownItem href="/signout">Sign out</DropdownItem>
	</Dropdown>
	<!-- <NavUl>
		<form>
			<Search size="md" class="mt-1 w-96 border focus:outline-none" />
		</form>
	</NavUl> -->
</Navbar>
