<script lang="ts">
    import QuillUi from "./QuillUi.svelte";
    import Icon from "@iconify/svelte";
    import slugify from "slugify";
    import { doc, setDoc } from "firebase/firestore";
    import { firestore } from "$lib/firebase";

    export let QuillData: string;
    export let ref: string;

    let debounceTimer: NodeJS.Timeout;
    let toastText: string,
        toastIcon: string,
        showToast = false;
    $: showToast && setTimeout(() => (showToast = false), 1000);

    function getQuillHTML(html: string) {
        // POST TITLE
        const matchH1 = html.match(/^<h1>(.*?)<\/h1>/);
        if (!matchH1) {
            (toastText = "First line must be H1"),
                (toastIcon = "line-md:alert-circle"),
                (showToast = true);
            return;
        }
        const title = matchH1[1];

        // POST HERO IMAGE
        const matchImg = html.match(/<img\s+src="([^"]+)"/);
        const heroImg = matchImg ? matchImg[1] : null;

        // Firebase Collection & Doc
        const [coll, id] = ref.split('/');

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(async () => {
            await setDoc(doc(firestore, coll, id), {
                id: id,
                title: title,
                slug: slugify(title, { lower: true }),
                content: html,
                heroImg: heroImg,
                pulished: false,
            });
            (toastText = "Saved"),
                (toastIcon = "line-md:check-all"),
                (showToast = true);
        }, 3000);
    }
</script>

<QuillUi {getQuillHTML} {QuillData} />

{#if showToast}
    <article class="toast">
        {toastText}
        <Icon icon={toastIcon} />
    </article>
{/if}

<style>
    article.toast {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        padding: 0.75rem 3rem;
        cursor: pointer;
    }
</style>
