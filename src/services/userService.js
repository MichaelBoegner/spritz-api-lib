import { SpritzApiClient } from "@spritz-finance/api-client";
const client = SpritzApiClient.initialize({});
export async function createUser(email) {
    const user = await client.user.create({ email });
    return user;
}