export async function load(serverLoadEvent) {
    /* 
    you see the load function in +page.server.js file and +page.js file is used to load data
    in +page.svelte file under a route. if you see both files(+page.server.js and +page.js)
    the data of load function in +page.server.js file is avaliable in +page.js file load function
    as data
    */
    const { fetch } = serverLoadEvent
    const response = await fetch('http://localhost:4000/products');
    const products = await response.json()
    return {
        serverData:'serverData'
    }
}