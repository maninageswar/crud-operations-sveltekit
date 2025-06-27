export async function load(loadEvent) {
    const { fetch } = loadEvent;
    const response = await fetch('api/postcodes');
    const postCodes = await response.json();
    return {
        postCodes
    };
}