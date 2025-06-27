import { json } from "@sveltejs/kit"
import { query } from "$lib/database/db"

export async function GET() {

    const employees = await query({
        query:"SELECT * FROM employee",
        values:[]
    })
    
    return json(employees)
}

export async function POST(requestEvent) {
    const requestJSON = await requestEvent.request.json();
    const { employeeID, employeeName, employeeAge, employeeGemder } = requestJSON;
    const insertEmployee = await query({
        query: 'INSERT INTO employee (EmpID, EmpName, EmpAge, EmpGender) VALUES (?, ?, ?, ?)',
        // @ts-ignore
        values: [employeeID, employeeName, employeeAge, employeeGemder]
    });


    return json('employee added successfully')
}

export async function PATCH(requestEvent) {
    const requestJSON = await requestEvent.request.json();
    const { employeeID, employeeName, employeeAge, employeeGemder } = requestJSON;
    const updateEmployee = await query({
        query: `UPDATE employee
            SET EmpName = ?, EmpAge= ?, EmpGender = ?
            WHERE EmpID = ?;
        `,
        // @ts-ignore
        values:[employeeName, employeeAge, employeeGemder, employeeID]
    });


    return json('employee updated successfully')
}
