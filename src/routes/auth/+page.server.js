import { fail } from '@sveltejs/kit';

export const actions = {
    login: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');
    
        // Validate email and password
        if (!username || !password) {
        return fail(400,{ error: 'Username and password are required.' });
        }

        setcookies(cookies, username)
        return {
            message:'Logged in successfully'
        }
    },

    register: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');
    
        // Validate email and password
        if (!username || !password) {
        return { error: 'Username and password are required.' };
        }

        setcookies(cookies, username)
        return {
            message:'Registered successfully'
        }
    }
}


// @ts-ignore
function setcookies(cookies, username) {
    cookies.set('username', String(username), {path: '/'})
}