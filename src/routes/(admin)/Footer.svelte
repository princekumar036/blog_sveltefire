<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="container">
	<p><strong><a class="logo" href="/">✒️BLOG</a></strong> &copy; 2024. All rights reserved.</p>
	<div class="social">
		<small><i>Follow us</i></small>
		<a href="https://twitter.com"><Icon icon="logos:twitter" /></a>
		<a href="https://instagram.com"><Icon icon="skill-icons:instagram" /></a>
		<a href="https://youtube.com"><Icon icon="logos:youtube-icon" /></a>
	</div>
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		padding-top: 0.73rem;
	}
	.social {
		display: flex;
		gap: 1rem;
	}
</style>