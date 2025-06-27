<script>
  import { invalidate, invalidateAll } from '$app/navigation';

    let { data } = $props();

    /*
    important note: jusst watch this video : https://youtu.be/zydO6wkqXRU?list=PLC3y8-rFHvwjifDNQYYWI6i06D7PjF0Ua
    to understand about invalidate and invalidateAll
    
    */

    function refreshStocks() {
        // the below invalidate method will call the load function that has depends with lable 'stocks:Actively-Trading'
        invalidate('stocks:Actively-Trading');

        // the below invalidate method will call the load function that has depends with lable 'stocks:Actively-Trading-In-Layout'
        // invalidate('stocks:Actively-Trading-In-Layout');

        // the below invalidateAll() method will call all the load functions irrespective of the label is present or not
        // invalidateAll();
    }

</script>

<h1>Actively Trading Stocks</h1>

{#each data.stocks as stock}
    <h2>{stock.symbol} - ${stock.price}</h2>
{/each}

<button onclick={refreshStocks}>refresh the stocks</button>

