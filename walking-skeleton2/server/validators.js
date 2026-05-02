import { z } from "@zod/zod";

//  Reusable Validation schemas

export const emailValidator = z.object({
    email: z.string().email(),
});
