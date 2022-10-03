import IHttpClient from "./application/data/IHttpClient";
import { FetchHttpClient } from "./infra/http/FetchHttpClient";
import { SWRHttpClient } from "./infra/http/SWRHttpClient";

export const httpClient: IHttpClient = SWRHttpClient;
export const fetchHttpClient: IHttpClient = FetchHttpClient;
