<script lang="ts">
	import Icon from "@iconify/svelte";

	export let signOut: () => void;
</script>

<header>
	<nav class="container">
		<ul>
			<li>
				<a class="logo" href="/admin"><strong>✒️BLOG Admin</strong></a>
			</li>
		</ul>
		<ul>
			<li>
				<a href="/" target="_blank"
					>Main Site <Icon icon="ri:arrow-right-up-line" /></a
				>
			</li>
			<li>
				<button class="secondary" on:click={signOut}>
					Logout <Icon icon="ion:log-out-outline" />
				</button>
			</li>
		</ul>
	</nav>
</header>