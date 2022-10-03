import CategoryDto from "../../dto/Category";
import CatalogApi from "../../services/apis/Catalog";
import { IHttpResponse } from "../data/IHttpClient";

export const getCategories = (): IHttpResponse<CategoryDto[], unknown> => {
    const catalogApi = new CatalogApi();
    return catalogApi.getHomeCategories();
};
