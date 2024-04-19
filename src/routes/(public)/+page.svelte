<script lang="ts">
    import { Collection } from "sveltefire";
</script>

<div class="hero">
    <img src="https://nicolas-vidal.com/wp-content/uploads/what-is-a-blog-1200x600-1.jpeg" alt="">
</div>

<div class="container">
    <h2>Recent Blogs</h2>
    <Collection ref="posts" let:data let:count>
        <div class="grid">
            {#each data.slice(0, 4) as post}
                <article>
                    <header><img src={post.heroImg} alt=""></header>
                    <div class="body" title={post.title}>{@html post.content.substring(0, 200) + '...'}</div>
                    <div><a href="/blogs/{post.slug}?id={post.id}">Read more</a></div>
                </article>
            {/each}
        </div>
    </Collection>
</div>

<style>
    div.hero img {
        width: 100%;
    }
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