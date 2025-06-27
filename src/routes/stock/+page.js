export async function load(loadEvent) {
    const { fetch, depends } = loadEvent;
    // depends('stocks:Actively-Trading')
    const stocksResponse = await fetch('http://localhost:4000/stocks');
    const stocks = await stocksResponse.json();
    return {
        stocks
    }
    
}