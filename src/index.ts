import { initializeApp } from "./config/settings";
import { createUser } from "./services/userService";

(async () => {
  initializeApp();

  const user = await createUser("cmikeb@gmail.com");
  console.log("User created:", user);
})();
