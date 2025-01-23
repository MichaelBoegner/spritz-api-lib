import { initializeApp } from "./config/settings.js";
import { createUser } from "./services/userService.js";


(async () => {
    initializeApp();
    const user = await createUser("cmikeb@gmail.com");
    console.log("User created:", user);
})();
