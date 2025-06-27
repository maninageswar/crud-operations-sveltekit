export async function load(loadEvent) {
    /* 
    this load function in +page.svelte file is a universal load fuction which
    will be called in both client and server in page reload 
    */
    console.log('products +page.js load funcion called')
    // Note: The data from loadEvent is the data from load function in +page.server.js file in the same directory
    const { fetch, data } = loadEvent
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json()
    return {
        products,
        data,
        notification:'end of season sale'
    }
}