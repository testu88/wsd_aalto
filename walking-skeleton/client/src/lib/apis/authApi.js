import { PUBLIC_API_URL } from "$env/static/public";


const login = async (credentials) => {
    const result =  await fetch(`${PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {"Content-Type":"application/json", },
        body: JSON.stringify(credentials),
    });
  
    return result;
};

const register = async (user) => {
    const result =  await fetch(`${PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type":"application/json", },
        body: JSON.stringify(user),
    });
  
    return result;
};

export { login, register }; 