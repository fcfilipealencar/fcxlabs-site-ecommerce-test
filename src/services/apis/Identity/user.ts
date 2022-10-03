import axios from "axios";

export interface UserRecoverPasswordProps {
    token: string | string[] | undefined;
    email: string | string[] | undefined;
    newPassword: string;
}

const identityApiUsers = axios.create({
    baseURL:
        "https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/identity/api/ecommerce-users",
});

class IdentityApiUsers {
    public static async resetPassword(
        data: UserRecoverPasswordProps
    ): Promise<void> {
        try {
            await identityApiUsers.post("/reset-password", data);
        } catch (error) {
            console.log(
                `error onChangePassword: ${JSON.stringify(error, null, 2)}`
            );
        }
    }
}

export { IdentityApiUsers };
