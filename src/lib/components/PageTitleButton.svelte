<script lang="ts">
    import { firestore } from '$lib/firebase';
    import Icon from '@iconify/svelte';
    import { doc, setDoc } from 'firebase/firestore';

    export let pageTitle:string
    export let postData:{}

    async function publishPost() {
        await setDoc(doc(firestore, "posts", postData.id), {
            ...postData, published: true
        }, { merge: true });
    }
</script>

<div>
    <h1 class="pageTitle">{pageTitle}</h1>
    <button on:click={publishPost}>Publish <Icon icon="material-symbols:publish-sharp" /></button>
</div>

<style>
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
</style>