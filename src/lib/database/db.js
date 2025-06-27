import mysql from 'mysql2/promise';
import { DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } from '$env/static/private';

// @ts-ignore
export async function query({ query, values = [] }) {
    const dbconnection = await mysql.createConnection({
        host: DATABASE_HOST,
        user: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME
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