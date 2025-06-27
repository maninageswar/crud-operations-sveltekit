<script>
    let { data } = $props();
</script>

<h1>Select your address</h1>

<select name="address" id="address">
    {#each data.postCodes as address}
        <option value={address.id}>{`${address.city}-${address.country}-${address.postcode}`}</option>
    {/each}
</select>