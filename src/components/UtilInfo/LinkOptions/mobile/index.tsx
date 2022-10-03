import Skeleton from "react-loading-skeleton";
import { UtilInfoDto } from "../../../../dto/UtilInfo";
import { theme } from "../../../../helpers/themes";
import UtilInfoApi from "../../../../services/apis/UtilInfo";
import { Column } from "../../../../ui/Column";
import { SpaceWrapper } from "../../../../ui/SpaceWrapper";
import UtilInfoLinkOptionMobileList from "./List";

const UtilInfoLinkOptionsMobile = () => {
    const utilInfoApi = new UtilInfoApi();
    const linkOptions = utilInfoApi.getLinkOptions();

    return linkOptions?.data ? (
        <>
            {linkOptions.data.map((linkOption: UtilInfoDto) => (
                <Column key={linkOption.title} xs="12">
                    <SpaceWrapper
                        padding={`${theme.space.x2} ${theme.space.x4}`}
                        {...(linkOption?.style && linkOption.style)}
                    >
                        <UtilInfoLinkOptionMobileList {...linkOption} />
                    </SpaceWrapper>
                </Column>
            ))}
        </>
    ) : linkOptions?.isLoading ? (
        <Skeleton count={5} height={theme.space.x4} />
    ) : null;
};

export default UtilInfoLinkOptionsMobile;
