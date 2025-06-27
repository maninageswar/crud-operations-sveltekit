export async function load({ fetch, depends }) {
    depends('employees:Records');
    const response = await fetch('/api/employee');
    const employees = await response.json();
    return{employees}
}