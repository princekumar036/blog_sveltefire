<script lang="ts">
    import Icon from '@iconify/svelte';
    import { Collection } from 'sveltefire';
    import { firestore } from '$lib/firebase';
    import { doc, deleteDoc } from "firebase/firestore";

    async function deletePost(id:string, title:string) {
        if (confirm(`Post: ${title}\nSure to delete?`)) {
            await deleteDoc(doc(firestore, "posts", id));
        }
    }
</script>

<h1>All Posts</h1>

<Collection ref={'posts'} let:data let:count>
    <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each data as post}
                <tr>
                    <td><img src={post.heroImg} alt="" width="50px"></td>
                    <td><a href="/admin/edit/{post.slug}?id={post.id}"><strong>{post.title}</strong></a></td>
                    <td><button on:click={() => deletePost(post.id, post.title)}><Icon icon="ph:trash" /></button></td>
                </tr>
            {/each}
        </tbody>
    </table>
</Collection>

<style>
    a {
        text-decoration: none;
    }
</style>