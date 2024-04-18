<script>
    import { onMount } from 'svelte';
    import Icon from '@iconify/svelte';
    export let text = ''


    onMount(() => {
        const timeout = setTimeout(() => {
            isVisible = false;
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    });
    let isVisible = true
</script>


{#if isVisible}
    <article class="hidden">
        {text}
        <Icon icon="line-md:check-all" />
    </article>
{/if}

<style>
    article {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        padding: 0.75rem 3rem;
        cursor: pointer;
    }
</style>