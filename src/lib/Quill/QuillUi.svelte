<script lang="ts">
	import { Editor } from "@tadashi/svelte-editor-quill";

    export let QuillData: string;
    export let getQuillHTML: Function;

	const options = {
		theme: "snow",
		placeholder:
			"Start typing here... (First line will be trated as the title and should be in H1)",
	};

</script>

<svelte:head>
	<link
		rel="preconnect"
		href="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.5/dist/quill.js"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/quill@2.0.0-rc.5/dist/quill.snow.css"
	/>
</svelte:head>

<Editor {options} data={QuillData} on:text-change={(e) => getQuillHTML(e.detail.html)} />

<style>
	:global(.ql-snow) {
		font-family: inherit;
		font-size: inherit;
	}
	:global(.ql-editor) {
		min-height: 500px;
		border: 0;
	}
	:global(.ql-toolbar) {
		position: sticky;
		top: 0;
		z-index: 99;
		background-color: whitesmoke;
	}
	:global(.ql-toolbar button) {
		margin-bottom: 0;
		border: none;
	}
</style>
