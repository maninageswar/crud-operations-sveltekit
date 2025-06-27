<script>
    import { page } from "$app/state";
    console.log("page", page);
</script>

<h1>{page.status}:{page.error?.message}</h1>