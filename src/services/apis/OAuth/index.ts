/**
 * @param granType - identifica provedor de autenticação. Ex: googleAuth, appleAuth
 * @param idToken - identificador do login retornado pelo provedor.
 * @param cpfClient - Cpf do usuário, unico dado necessário para cadastro que não é passado pelo provedor. Será necessário capturar manualmente.
 */

import axios from "axios";

export const OAuth = async (
    grantType: string,
    idToken: string,
    cpfClient?: string
) => {
    const dataOAuth = new URLSearchParams({
        grant_type: grantType,
        id_token: idToken,
        scope: "ecommerce offline_access",
        client_id: "213cc4e7-d026-4a0b-a1d4-b101bd749715",
        client_secret: "8)v)9{P/8/L[UmrD",
        cpf: cpfClient ?? "",
    });

    const identityApi = axios.create({
        baseURL: "https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        },
    });

    return identityApi
        .post("identity/connect/token", dataOAuth)
        .then(response => response.data);
};
