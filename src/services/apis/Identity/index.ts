import axios from "axios";
import {
    AuthenticationProps,
    UserProps,
} from "../../../application/context/Identity/types/auth";
import IApi from "../../../application/data/IApi";
import IdentityDto from "../../../dto/Identity";
import { httpClient } from "../../../main";

const identityApi = axios.create({
    headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
    },
});

interface AuthGoogleProps {
    accessToken: {
        return: string;
    };
}

export default class IdentityApi implements IApi {
    baseUrl: string;

    baseUrlDev: string;

    public constructor() {
        this.baseUrl = `${process.env.APIS_BASE_URL}identity/`;
        this.baseUrlDev = `http://identity-dev.ferreiracosta.com`;
    }

    verifyClientEndpoint = () => {
        return `${this.baseUrl}connect/token`;
    };

    verifyClient = async (body: BodyInit) => {
        return httpClient.usePost<IdentityDto>(
            this.verifyClientEndpoint(),
            body
        );
    };

    public async getToken({
        login,
        password,
    }: UserProps): Promise<AuthenticationProps | null> {
        try {
            const { data } = await identityApi.post<AuthenticationProps>(
                `${this.baseUrlDev}/connect/token`,
                new URLSearchParams({
                    client_id: "213cc4e7-d026-4a0b-a1d4-b101bd749715",
                    client_secret: "8)v)9{P/8/L[UmrD",
                    grant_type: "password",
                    scope: "ecommerce offline_access",
                    username: login,
                    password,
                })
            );

            return data;
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
            return null;
        }
    }

    // eslint-disable-next-line class-methods-use-this
    public async getTokenGoogleAuth({
        accessToken,
    }: AuthGoogleProps): Promise<AuthenticationProps | null> {
        try {
            const { data } = await identityApi.post<AuthenticationProps>(
                `https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/identity/connect/token`,
                new URLSearchParams({
                    grant_type: "googleAuth",
                    id_token: accessToken.return,
                    scope: "ecommerce offline_access",
                    client_id: "213cc4e7-d026-4a0b-a1d4-b101bd749715",
                    client_secret: "8)v)9{P/8/L[UmrD",
                })
            );

            return data;
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
            return null;
        }
    }
}

export { IdentityApi, identityApi };
