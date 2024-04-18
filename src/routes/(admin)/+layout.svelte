<script>
	import { FirebaseApp, SignedIn, SignedOut } from "sveltefire";
	import { auth, firestore } from "$lib/firebase";
	import "@picocss/pico";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import Login from "./Login.svelte";
</script>


<FirebaseApp {auth} {firestore}>

	<SignedIn let:user let:signOut>
		<Header {signOut} />
		<main class="container">
			<slot />
		</main>
		<Footer />
	</SignedIn>

	<SignedOut>
		<Login />
	</SignedOut>

</FirebaseApp>

<style>
	main.container {
		max-width: 768px;
		min-height: 100vh;
		padding: 2rem 0;
	}
	:global(.logo) {
		text-decoration: none;
		color: inherit;
	}
</style>
