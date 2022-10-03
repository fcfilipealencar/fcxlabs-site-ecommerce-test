import { theme } from "../../../helpers/themes";
import UtilInfoApi from "../../../services/apis/UtilInfo";
import { Column } from "../../../ui/Column";
import { Desk, DeskInfo } from "../../../ui/Desk";
import { mappedIcons } from "../../../ui/Icons";
import { Title } from "../../../ui/Typography/Title";
import { Skeleton } from "../../Skeleton";
import UtilInfoOption from "../Option";

const UtilInfoLinkOptions = () => {
    const utilInfoApi = new UtilInfoApi();
    const linkOptions = utilInfoApi.getLinkOptions();

    return linkOptions?.data ? (
        <>
            {linkOptions.data.map(({ title, icon, options }) => (
                <Column key={title} md="4">
                    <Desk
                        hasRightBorder={false}
                        alignItems="start"
                        gap={theme.space.x4}
                    >
                        {icon && (
                            <DeskInfo>
                                {mappedIcons(icon?.title, {
                                    width: icon?.width
                                        ? Number(icon.width)
                                        : undefined,
                                    height: icon?.height
                                        ? Number(icon.height)
                                        : undefined,
                                    color: icon?.color || undefined,
                                })}
                            </DeskInfo>
                        )}
                        <DeskInfo>
                            <Title fontSize={theme.typography.fontSize.xs}>
                                {title}
                            </Title>
                            {options?.length &&
                                options.map(option => (
                                    <UtilInfoOption
                                        key={option.title}
                                        {...option}
                                    />
                                ))}
                        </DeskInfo>
                    </Desk>
                </Column>
            ))}
        </>
    ) : linkOptions?.isLoading ? (
        <Skeleton count={5} height={theme.space.x4} />
    ) : null;
};

export default UtilInfoLinkOptions;
