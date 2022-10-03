import { useMediaQuery } from "usehooks-ts";

export const useIsClientMobile = () => {
    return useMediaQuery("(max-width: 480px)");
};
