/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-await */
import axios from "axios";

/**
 * retorna um JSON contendo os dados do usuário.
 * @param accessToken - Indentificador de acesso.
 */

export const GoogleAuthenticate = async (accessToken: string) => {
    const config = {
        method: "get",
        url: "https://people.googleapis.com/v1/people/me?personFields=names%2Cgenders%2Cbirthdays%2CemailAddresses%2CphoneNumbers&key=AIzaSyASW44brCFpni4di2UkGkz0i0QbmybiGnU",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return await axios(config)
        .then(response => response.data)
        .catch(error => error);
};
