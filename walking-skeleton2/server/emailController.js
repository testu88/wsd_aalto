import * as validators from "./validators.js";
import { zValidator } from "@hono/zod-validator";

const createEmail = [
    // Validation middleware
    zValidator("json", validators.emailValidator),
    // controller function
    async (c) => {
        const data = c.req.valid("json");
        return c.json(data);
    },
];

export { createEmail };