import IApi from "../../../application/data/IApi";
import { IHttpResponse } from "../../../application/data/IHttpClient";
import SupportContactDto from "../../../dto/SupportContact";
import { httpClient } from "../../../main";

export default class SupportContactApi implements IApi {
    baseUrl = "";

    constructor() {
        // this.baseUrl = `${process.env.NEXT_PUBLIC_APIS_BASE_URL}`;
        this.baseUrl = `${
            process.env.NEXT_PUBLIC_MOCKS_BASE_URL ?? this.baseUrl
        }`;
    }

    private getOptionsEndpoint = () => {
        return `${this.baseUrl}support-contact/options`;
    };

    getOptions = (): IHttpResponse<SupportContactDto[], unknown> => {
        const { data, error } = httpClient.useGet<SupportContactDto[]>(
            this.getOptionsEndpoint()
        ) as IHttpResponse<SupportContactDto[], unknown>;

        return {
            data,
            isLoading: !error && !data,
            error,
        };
    };
}
