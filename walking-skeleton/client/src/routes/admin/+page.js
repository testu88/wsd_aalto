import { browser } from "$app/environment";
import { error } from "@sveltejs/kit";
import { goto } from "$app/navigation";


// Only user with role "ADMIN" can view the admin page
export const load =  () => {
    if (browser) {
        const user = localStorage.getItem("user");
        if (!user){
           // throw error(401, "Unauthorized");
            goto("/auth/login");
        };

        const roles = JSON.parse(user).roles || [];
        if (!roles.includes("ADMIN")){
            //throw error(403, "Forbidden");
            throw error(403, "Access denied")
        }
    }
};

