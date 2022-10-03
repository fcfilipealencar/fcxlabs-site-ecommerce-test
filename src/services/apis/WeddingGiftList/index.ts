import IApi from "../../../application/data/IApi";
import { IHttpResponse } from "../../../application/data/IHttpClient";
import { CoupleDetailDto } from "../../../dto/CoupleDetail";
import { fetchHttpClient } from "../../../main";

export default class WeddingGiftListApi implements IApi {
    baseUrl = "";

    constructor() {
        // this.baseUrl = `${process.env.NEXT_PUBLIC_APIS_BASE_URL}`;
        this.baseUrl = `${
            process.env.NEXT_PUBLIC_MOCKS_BASE_URL ?? this.baseUrl
        }`;
    }

    private getCouplesEndpoint = () => {
        return `${this.baseUrl}wedding-gift-list/couples`;
    };

    getCouples = async (): Promise<
        IHttpResponse<CoupleDetailDto[], unknown>
    > => {
        const { data, error } = await fetchHttpClient.useGet<CoupleDetailDto[]>(
            this.getCouplesEndpoint()
        );
        return {
            data,
            isLoading: !error && !data,
            error,
        };
    };
}
