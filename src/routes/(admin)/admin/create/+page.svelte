<script lang="ts">
    import QuillFire from '$lib/Quill/QuillFire.svelte';
    import Icon from '@iconify/svelte';
    import { page } from '$app/stores';
    import PageTitleButton from '$lib/components/PageTitleButton.svelte';

</script>

<h1>Create Post</h1>
<QuillFire QuillData="" ref={"posts/"+$page.data.uuid} />