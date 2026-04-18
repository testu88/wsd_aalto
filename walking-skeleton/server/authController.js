import { hash, verify } from "scrypt";
import * as authRespository from "./authRepository.js";
import * as jwt from "@hono/hono/jwt";


const JWT_SECRET = "jwt_secret";

const register = async (c) => {
    try {
        const user = await c.req.json();
        if (!user.password|| !user.email){
             return c.json({ message: `Confirmation email sent to address ${user.email}.`});
        };
        user.password_hash =  hash(user.password);
        const newUser = await authRespository.create(user);
        return c.json({
            message: `Confirmation email sent to address ${newUser.email}.`,
            user: {id: newUser.id, email: newUser.email},
        });
    } catch (err) {
        console.error("Register error:",err);
        return c.json({ message: `Confirmation email sent to address ${user.email}.`});
    };
    
};

const login = async (c) => {
    const user = await c.req.json();
    const foundUser = await authRespository.findByEmail(user.email);
    if (!foundUser) {
        return c.json({ error: "Invalid email or password"}, 401);
    };
    const isValid = verify(user.password, foundUser.password_hash);
    if (!isValid) {
        return c.json({ error: "Invalid email or password"}, 401);
    };

    const payload = { id: Number(foundUser.id), email: foundUser.email, exp: Math.floor(Date.now() / 1000) + 60 };
    const token = await jwt.sign(payload, JWT_SECRET);


    return c.json({
        message: `Welcome back ${foundUser.email}!`,
        user: { id: Number(foundUser.id),  email: foundUser.email},
        token
    });
};

export { register, login };