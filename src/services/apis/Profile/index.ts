import axios from "axios";
import IApi from "../../../application/data/IApi";
import ProfileDto from "../../../dto/Profile";
import { httpClient } from "../../../main";

export default class ProfileApi implements IApi {
    baseUrl: string;

    public constructor() {
        this.baseUrl = `${process.env.APIS_BASE_URL}profile/`;
    }

    postClientsEndpoint = () => {
        return `${this.baseUrl}v1/clients`;
    };

    createClient = async (body: BodyInit) => {
        return httpClient.usePost<ProfileDto>(this.postClientsEndpoint(), body);
    };
}

export const postProfile = async (body: ProfileDto) => {
    const identityApi = axios.create({
        baseURL: "https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/",
        headers: {
            "content-type": "application/json",
        },
    });

    return identityApi
        .post("profile/v1/clients", body)
        .then(response => response.data);
};
