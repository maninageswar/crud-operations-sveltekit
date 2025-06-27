import mysql from 'mysql2/promise';
/*
 the below import is coming .env file but it is not pushed to git so used the
 actual values in below query function to connect to database
 */

// @ts-ignore
import { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } from '$env/static/private';

// @ts-ignore
export async function query({ query, values = [] }) {
    const dbconnection = await mysql.createConnection({
        /* 
        the below values are the values of the mysql database which is installed in
        windows laptop you have laptop replacement right then install mysql in mac
        and create a database named 'company' and a table named 'employee' 
        with columns "EmpID, EmpName, EmpAge, EmpGender"
        */
        host: 'localhost',
        user: 'root',
        password: 'root@2023#',
        database: 'company'
    });

    try {
        // @ts-ignore
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end()
        return results;
    } catch (error) {
        console.error('Database query error:', error);
        // throw error;
        return {error}
    }
}