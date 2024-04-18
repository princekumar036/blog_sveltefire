<script>
    import { Collection } from "sveltefire";
</script>

<Collection ref="posts" let:data let:count>
    <p>Fetched {count} documents</p>
    {#each data as post}
        <li>{post.id}</li>
    {/each}
</Collection>
