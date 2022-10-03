import IApi from "../../../application/data/IApi";
import { IHttpResponse } from "../../../application/data/IHttpClient";
import { UtilInfoDto } from "../../../dto/UtilInfo";
import { httpClient } from "../../../main";

export default class UtilInfoApi implements IApi {
    baseUrl = "";

    constructor() {
        // this.baseUrl = `${process.env.NEXT_PUBLIC_APIS_BASE_URL}`;
        this.baseUrl = `${
            process.env.NEXT_PUBLIC_MOCKS_BASE_URL ?? this.baseUrl
        }`;
    }

    private getPaymentOptionsEndpoint = () => {
        return `${this.baseUrl}util-info/payment-options`;
    };

    getPaymentOptions = (): IHttpResponse<UtilInfoDto[], unknown> => {
        const { data, error } = httpClient.useGet<UtilInfoDto[]>(
            this.getPaymentOptionsEndpoint()
        ) as IHttpResponse<UtilInfoDto[], unknown>;

        return {
            data,
            isLoading: !error && !data,
            error,
        };
    };

    private getLinkOptionsEndpoint = () => {
        return `${this.baseUrl}util-info/link-options`;
    };

    getLinkOptions = (): IHttpResponse<UtilInfoDto[], unknown> => {
        const { data, error } = httpClient.useGet<UtilInfoDto[]>(
            this.getLinkOptionsEndpoint()
        ) as IHttpResponse<UtilInfoDto[], unknown>;

        return {
            data,
            isLoading: !error && !data,
            error,
        };
    };
}
