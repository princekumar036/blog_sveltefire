<script>
    import { Doc } from 'sveltefire';
</script>

<Doc ref={'posts/first-post'} let:data>
    <h2>{data?.title}</h2>
    <div>{@html data?.body}</div>

    <p slot="loading">Loading...</p>
</Doc>