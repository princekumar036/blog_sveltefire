<script lang="ts">
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { auth } from '$lib/firebase';

    let email:string, password:string;

    async function login() {
        await signInWithEmailAndPassword(auth, email, password)
    }
</script>

<div class="container">
    <article>
        <h2>Login</h2>
        <i><small>* Login required to continue</small></i>
        <br><br>
        <label>Email <input type="text" placeholder="Email" bind:value={email}></label>
        <label>Password <input type="password" placeholder="Password" bind:value={password}></label>
        <br>
        <button type="submit" on:click={login}>Login</button>
    </article>
</div>

<style>
    div {
        margin-top: 5rem;
        max-width: 768px;
    }
</style>