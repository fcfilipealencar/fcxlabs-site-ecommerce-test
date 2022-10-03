export interface UserProps {
    login: string;
    password: string;
}

export interface UserData {
    cpf: string;
    profile_id: string;
    name: string;
    email: string;
    iss: string;
    nbf: number;
    iat: number;
    exp: number;
    aud: [
        "backoffice_api",
        "identity_api",
        "catalog_api",
        "payment_api",
        "profile_api",
        "purchase_api",
        "shipping_api",
        "shopping_api",
        "notification_api"
    ];
    scope: ["ecommerce", "offline_access"];
    amr: ["password"];
    client_id: string;
    sub: string;
    auth_time: number;
    idp: string;
}

export interface AuthenticationProps {
    access_token: string;
    expires_in: number;
    token_type: "Bearer" | string;
    refresh_token: string;
    scope: "ecommerce offline_access" | string;
}

export interface GoogleAuthSessionProps {
    name: string;
    accessToken: {
        return: string;
    };
}
