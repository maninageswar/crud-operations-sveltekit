<script>
  import { page } from '$app/state';

    let { data } = $props();
    console.log('productId',data)
</script>

<p>check path parms using page </p>
<p>you are looking the product details of product - {page.params.productsId}</p>

<h1>Product Details</h1>

<p>product id : {data.product.id}</p>
<p>product title : {data.product.title}</p>
<p>product price : {data.product.price}</p>
<p>product desctiption : {data.product.description}</p>