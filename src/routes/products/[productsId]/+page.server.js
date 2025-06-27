import { error, redirect } from '@sveltejs/kit';

export async function load(serverLoadEvent) {
    // the serverLoadEvent has the following properties that you destructure
    const {fetch, params, url, route} = serverLoadEvent;
    if (parseInt(params.productsId) > 3) {
        // you can throw an error or 
        // throw error(404, 'Product not found');

        // you can redirect to another page
        throw redirect(307, '/products');
    }
    const response = await fetch(`http://localhost:4000/products/${params.productsId}`)
    const product = await response.json()
    console.log('product',product)
    return {
        product,
        notification:'end of season sale 50% off' 
    }
}