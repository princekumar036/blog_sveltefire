<script>
    import { Collection } from 'sveltefire';
</script>

<h1>Dashboard</h1>

<Collection ref={'posts'} let:data let:count>
    <div class="statistics">
        <p><strong>You have a total of <big>{count}</big> posts in your database</strong></p>
        <p><strong>Out of which, <big>{data.filter(post => post.isPublished).length}</big> posts have been published</strong></p>
        <p><strong>And, <big>{data.filter(post => !post.isPublished).length}</big> posts are yet to be published</strong></p>
    </div>
</Collection>

<div class="grid">
    <a role="button" href="/admin/list">View all posts</a>
    <a role="button" href="/admin/create">Create a new post</a>
</div>

<style>
    .statistics {
        margin: 3rem 0;
    }
</style>