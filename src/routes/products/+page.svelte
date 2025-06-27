<script>
    let { data } = $props()
</script>

<h1>List of avaliable Products for {data.username}</h1>

{#each data.products as product,index}
    <!-- <h2>{product.title}</h2> -->
    <h2><a href="/products/{index+1}">Product - {index+1}</a></h2>
    <p>{product.description}</p><hr/>
{/each}