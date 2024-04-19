<script>
    import { Collection } from "sveltefire";

</script>

<slot />

<h2>Recent Blogs</h2>
<Collection ref="posts" let:data let:count>
    <div class="container grid">
        {#each data as post}
            <article>
                <header><img src={post.heroImg} alt=""></header>
                <div class="body" title={post.title}>{@html post.content.substring(0, 200) + '...'}</div>
                <div><a href="/blogs/{post.slug}?id={post.id}">Read more</a></div>
            </article>
        {/each}
    </div>
</Collection>

<style>
    h2 {
        text-align: center;
        margin-top: 3rem;
    }    
    article img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
</style>