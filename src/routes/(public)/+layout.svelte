<script>
  import { FirebaseApp, User, Collection } from "sveltefire";
  import { auth, firestore } from "$lib/firebase";
  import '@picocss/pico'
  import '../../app.css'
  import SiteTitle from "$lib/components/SiteTitle.svelte";
    import SocialIcons from "$lib/components/SocialIcons.svelte";

  
</script>

<header>
  <nav class="container">
    <ul>
      <li><h3><SiteTitle /></h3></li>
    </ul>
    <ul>
      <li><strong><a class="" href="/">Home</a></strong></li>
      <li><strong><a class="secondary" href="/about">About</a></strong></li>
      <li><strong><a class="secondary" href="/blogs">Blogs</a></strong></li>
      <li><strong><a class="secondary" href="/contact">Contact</a></strong></li>
    </ul>
  </nav>
</header>
  
<main class="container">
  <FirebaseApp {auth} {firestore}>
    <slot />
  </FirebaseApp>
</main>

<footer>
  <div class="container">
    <p><b><SiteTitle /></b> &copy; 2024. All rights reserved.</p>
    <SocialIcons />
  </div>
</footer>


<style>
  footer div {
    display: flex;
    justify-content: space-between;
    padding-top: 0.73rem;
  }
</style>