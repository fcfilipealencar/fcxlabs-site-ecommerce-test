import IApi from "../../../application/data/IApi";
import { IHttpResponse } from "../../../application/data/IHttpClient";
import CategoryDto from "../../../dto/Category";
import { httpClient } from "../../../main";

export default class CatalogApi implements IApi {
    baseUrl = "";

    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_APIS_BASE_URL
            ? `${process.env.NEXT_PUBLIC_APIS_BASE_URL}catalog/`
            : this.baseUrl;
    }

    getHomeCategoriesEndpoint = (parentId = 0) => {
        return `${this.baseUrl}v1/playlist/home-categories?parentId=${parentId}`;
    };

    getHomeCategories = (
        parentId = 0
    ): IHttpResponse<CategoryDto[], unknown> => {
        const { data, error } = httpClient.useGet<CategoryDto[]>(
            this.getHomeCategoriesEndpoint(parentId)
        ) as IHttpResponse<CategoryDto[], unknown>;

        return {
            data,
            isLoading: !error && !data,
            error,
        };
    };
}
