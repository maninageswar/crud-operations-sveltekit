export async function load(serverLoadEvent) {
    /*
    if you want to access the data that is returned from parent layout
    you can destructure the parent function from serverLoadEvent in the child layout or chlild pages
    */
    const { fetch, parent } = serverLoadEvent
    const parentData = await parent()
    console.log('Parent Data:', parentData)
    const response = await fetch('http://localhost:4000/featured-products')
    const featuredProducts = await response.json()
    return {
        featuredProducts
    }
}