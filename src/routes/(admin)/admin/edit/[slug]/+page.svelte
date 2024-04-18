<script lang="ts">
    import { page } from '$app/stores';
    import QuillFire from '$lib/Quill/QuillFire.svelte';
    import PageTitleButton from '$lib/components/PageTitleButton.svelte';
    // import { doc, setDoc } from 'firebase/firestore';
    // import { firestore } from '$lib/firebase';

    // async function publishPost() {
    //     await setDoc(doc(firestore, "posts", $page.data.id), { 
    //         ...$page.data.post, isPublished: true 
    //     }, { merge: true });
    // }
</script>

<h1>Edit Post</h1>
<QuillFire QuillData={$page.data.post.content} ref={"posts/"+$page.data.id} />