import * as jwt from "@hono/hono/jwt";
import { auth } from "./betterAuth.js";


const JWT_SECRET = "jwt_secret";

const authenticate = async (c, next) => {
    const session = await auth.api.getSession({
        headers: c.req.raw.headers
    });
    // Verify session and add user object to context
    if (!session || !session.user){
        return c.json({ error : "Authentication required"}, 401);
    };
    c.set("user", session.user);
    await next();
};

const requireAnyRole =  (...requiredRoles) => {
    return async (c ,next) => {
        const user = c.get("user");
        if (!user) {
            return c.json({ error: "Authentication required"}, 401);
        };
        console.log("User role:", user.roles);
        if (!user.roles || !user.roles.some((role) => requiredRoles.includes(role))){
            return c.json({ error: "Insufficient permissions"}, 403);
        };
        await next();
    };
};


export { authenticate, requireAnyRole };