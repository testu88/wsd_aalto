import { hash, verify } from "scrypt";
import * as authRespository from "./authRepository.js";

const register = async (c) => {
    try {
        const user = await c.req.json();
    user.password_hash =  hash(user.password);
    const newUser = await authRespository.create(user);
    return c.json({
        message: `Confirmation email sent to address ${newUser.email}.`,
        user: {id: newUser.id, email: newUser.email},
    });
    } catch (err) {
        console.error("Register error:",err);
        return c.json({ message: "Confirmation email sent to address ${email}."});
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
    return c.json({
        message: "Login successful",
        user: { email: foundUser.email},
    });
};

export { register, login };