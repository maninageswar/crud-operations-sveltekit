<script>
    import { invalidate } from '$app/navigation';

    let { data } = $props();

    let employeeID = $state('')
    let employeeName = $state('')
    let employeeAge = $state('')
    let employeeGemder = $state('')

    // @ts-ignore
    async function deleteEmployee(employeeID) {
        const request = await fetch(`api/employee/${employeeID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        invalidate('employees:Records');
    }

    async function createEmployee() {
        const employeeID = data.employees.length + 1
        const request = await fetch(`api/employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // @ts-ignore
            body: JSON.stringify({ employeeID, employeeName, employeeAge, employeeGemder })
        });
        invalidate('employees:Records');
        // Reset the input fields after creation
        employeeName = '';
        employeeAge = '';
        employeeGemder = '';
    }

    async function saveUpdateEmployee() {
        const request = await fetch(`api/employee`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ employeeID, employeeName, employeeAge, employeeGemder })
        });
        invalidate('employees:Records');
    }

    // @ts-ignore
    function updateEmployee(empID, empName, empAge, empGender) {
        employeeID = empID;
        employeeName = empName;
        employeeAge = empAge;
        employeeGemder = empGender;
    }
</script>

<h3>CRUD Operations using MYSQL database</h3>



<div class="someting">
    <table>
    <thead>
        <tr>
        <th>Employee ID</th>
        <th>Employee Name</th>
        <th>Employee Age</th>
        <th>Employee Gender</th>
        <th>actions</th>
        </tr>
    </thead>
    <tbody>
        {#each data.employees as employee (employee.EmpID)}
        <tr>
            <td>{employee.EmpID}</td>
            <td>{employee.EmpName}</td>
            <td>{employee.EmpAge}</td>
            <td>{employee.EmpGender}</td>
            <td class="actions">
                <button onclick={()=>{updateEmployee(employee.EmpID, employee.EmpName, employee.EmpAge, employee.EmpGender)}}>Update</button>
                <button onclick={()=>{deleteEmployee(employee.EmpID)}}>Delete</button>
            </td>
        </tr>
        {/each}  
    </tbody>
    </table>

    <div class="edit-create">
        <div class="input-row"><label for="empname">employee name</label><span>:</span>     <input bind:value={employeeName} id="empname" type="text"></div>
        <div class="input-row"><label for="empage">employee age</label><span>:</span>       <input bind:value={employeeAge} id="empage" type="number"></div>
        <div class="input-row"><label for="empgender">employee gender</label><span>:</span> <input bind:value={employeeGemder} id="empgender" type="text"></div>
        <div>
            <button onclick={createEmployee}>Create</button>
            <button onclick={saveUpdateEmployee}>Save Update</button>
        </div>
    </div>
</div>



<style>
  table {
    width: 50%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 5px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }

  .actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

  .someting {
    display: flex;
  }

  .edit-create {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 260px;
  }

  .edit-create .input-row {
    display: grid;
    grid-template-columns: 140px 10px 1fr;
    align-items: center;
    gap: 4px;
    font-size: 1.1em;
    color: #333;
    font-family: 'Segoe UI', Arial, sans-serif;
  }

  .edit-create label {
    text-align: right;
    padding-right: 4px;
    white-space: nowrap;
  }

  .edit-create span {
    text-align: center;
    font-weight: bold;
  }

  .edit-create input {
    padding: 6px;
    border: 1px solid #888;
    border-radius: 4px;
    margin-bottom: 0;
    font-size: 1em;
  }

  .edit-create button {
    float: right;
    padding: 8px 12px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 5px;
  }

  #empid:focus {
    outline: none;
    border: none;
  }



</style>