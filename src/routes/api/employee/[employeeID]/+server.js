import { json } from '@sveltejs/kit';
import { query } from "$lib/database/db"

export async function DELETE(requestEvent) {
    const { employeeID } = requestEvent.params;
    console.log('employeeID', employeeID)
    const deleteEmployee = await query({
        query: 'DELETE FROM employee WHERE EmpID = ?',
        // @ts-ignore
        values: [employeeID]
    });
    console.log('deleteEmployee', deleteEmployee)
    return json('deleted')
}