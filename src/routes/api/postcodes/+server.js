import { json } from "@sveltejs/kit"

export async function GET() {
    const response = await fetch('http://localhost:4000/postcodes')
    const postCodes = await response.json()
    return json(postCodes)
}