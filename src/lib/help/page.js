// export async function load(loadEvent) {
//     /* 
//     this load function in +page.svelte file is a universal load fuction which
//     will be called in both client and server in page reload 
//     */
//     console.log('products +page.js load funcion called')
//     const { fetch } = loadEvent
//     const response = await fetch('http://localhost:4000/products');
//     const products = await response.json()
//     return {
//         products
//     }
// }