import { z } from "@zod/zod";

// Zod validation library

// String
/*const validator = z.string().email();
let result = validator.safeParse("this is not an email");
console.log(result.error.issues?.[0]?.message);
result = validator.safeParse("user@example.com");
console.log(result);*/

// Object
const validator = z.object({
    email: z.string().email(),
});

let result = validator.safeParse("this-is-not-an-email");
console.log(result);

result = validator.safeParse({email: "user@example.com"});
console.log(result);

