import { PUBLIC_API_URL } from "$env/static/public";


const login = async (credentials) => {
    const result =  await fetch(`${PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {"Content-Type":"application/json", },
        body: JSON.stringify(credentials),
    });
    console.log("api result:", result);
    return result;
};

const register = async (user) => {
    const result =  await fetch(`${PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type":"application/json", },
        body: JSON.stringify(user),
    });
    console.log("api result register:", result);
    return result;
};

export { login, register }; 