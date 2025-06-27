<script>
    let { data, children } = $props();
</script>

<div>Most Active Stock - <strong>{data.mostActiveStock.symbol}</strong></div>
<div>Top Gainig Stock - <strong>{data.topGainingStock.symbol}</strong></div>
<div>Top Losing Stock - <strong>{data.topLosingStock.symbol}</strong></div>

{@render children()}