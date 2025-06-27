export async function load(loadEvent) {
    const { fetch, depends } = loadEvent;
    // depends('stocks:Actively-Trading-In-Layout');
    const mostActiveStockResponse = await fetch('http://localhost:4000/most-active-stock')
    const topGainingStockResponse = await fetch('http://localhost:4000/top-gaining-stock')
    const topLoasingStockResponse = await fetch('http://localhost:4000/top-losing-stock')
    /*
    here you see there are three await statements so each one will resolve one after the other 
    */
    // const mostActiveStock = await mostActiveStockResponse.json();
    // const topGainingStock = await topGainingStockResponse.json();
    // const topLoasingStock = await topLoasingStockResponse.json();
    // return {
    //     mostActiveStock,
    //     topGainingStock,
    //     topLoasingStock
    // };

    // if you want to resolve them parallelly you can do like below

    // cross check this again
    return {
        mostActiveStock: await mostActiveStockResponse.json(),
        topGainingStock: await topGainingStockResponse.json(),
        topLosingStock: await topLoasingStockResponse.json()
    };


}