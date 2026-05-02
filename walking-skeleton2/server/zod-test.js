import { z } from "@zod/zod";

// Zod validation library

// String
/*const validator = z.string().email();
let result = validator.safeParse("this is not an email");
console.log(result.error.issues?.[0]?.message);
result = validator.safeParse("user@example.com");
console.log(result);*/

// Object
/*const validator = z.object({
    email: z.string().email(),
});

let result = validator.safeParse("this-is-not-an-email");
console.log(result);

result = validator.safeParse({email: "user@example.com"});
console.log(result);*/


// Only data defined in schema shown
/*const validator = z.object({
    email: z.string().email(),
});

let result = validator.safeParse({
    garbage: "not needed",
    email: "user@example.com",
});

console.log(result);*/

// Error message
const validator = z.object({
    email: z.string().email({ message: "The email is not valid."}),
    yearOfBirth: z.coerce.number({
        message: "The year of birth is not a number.",
    }).min(1930, { message: "The year of birth must not be smaller than 1930."}).max(2026, { message: "The year of birth must not be bigger than 2026"}),
});

let result = validator.safeParse({
    email: "user@example.com",
    yearOfBirth: 2027,
});

console.log(result);