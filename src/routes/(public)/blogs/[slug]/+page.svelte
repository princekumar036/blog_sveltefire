

<script>
    import { page } from "$app/stores";
    import { Doc } from "sveltefire";
</script>

<Doc ref={"posts/"+$page.data.id} let:data>
    <div class="container">
        {@html data.content}
    </div>
</Doc>

<style>
    .container {
        max-width: 768px;
        margin: 3rem auto;
    }
</style>