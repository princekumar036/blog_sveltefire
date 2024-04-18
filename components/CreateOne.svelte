<script>
    import { doc, setDoc } from "firebase/firestore";
    import { firestore } from "$lib/firebase";

    let data = "";
    async function create() {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        // await setDoc(doc(firestore, "posts", id), {
            // id: '',
            // slug: '',
            // title: '',
            // heroImage: '',
            // body: '',
            // createAt: '',
            // editedAt: '',
            // published: false,
        // })

        // do something after create
    }
</script>

<h1>Create Blog</h1>
<form on:submit|preventDefault={create}>
    <textarea bind:value={data}></textarea>
    <button type="submit">Create</button>
</form>