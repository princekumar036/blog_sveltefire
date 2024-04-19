<script lang="ts">
    import { page } from '$app/stores';
    import QuillFire from '$lib/Quill/QuillFire.svelte';
</script>

<h1>Edit Post</h1>
<QuillFire QuillData={$page.data.post.content} ref={"posts/"+$page.data.id} />