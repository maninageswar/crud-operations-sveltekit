<script>
    import { page } from "$app/state";
    let { children, data } = $props();
</script>

<!-- 
    here the page.data.notification is the data that is received from child pages or 
 -->
<header>notification banner {page.data.notification}</header>

<h1>Welcome {data.username}</h1>
{@render children()}

<style>
    header {
        height: 3rem;
        background-color: rgb(203, 203, 26);
        text-align: center;
        font-size: larger;
    }
</style>