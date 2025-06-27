<script>
    // the data here is loaded from +layout.js or +layout.server.js or from parent layout
    let { children, data } = $props();
</script>

{@render children()}
<br>

<h1>Featured products for {data.username}</h1>

<div class="featuredProducts">
    {#each data.featuredProducts as featuredProduct}
        <div class="featuredproduct">
            <h4>{featuredProduct.title}</h4>
            <h5>{featuredProduct.description}</h5>
            <p>{featuredProduct.price}</p>
        </div>
    {/each}
</div>

<style>
    .featuredProducts {
        /* border: 2px solid red; */
        /* height: 10rem; */
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    /* .featuredproduct{
        border: 2px solid white
    } */
</style>