import { useAppContext } from "../../../application/context/state";
import { theme } from "../../../helpers/themes";
import UtilInfoApi from "../../../services/apis/UtilInfo";
import { Column } from "../../../ui/Column";
import { mappedIcons } from "../../../ui/Icons";
import { Row } from "../../../ui/Row";
import { SpaceWrapper } from "../../../ui/SpaceWrapper";
import { Title } from "../../../ui/Typography/Title";
import { Skeleton } from "../../Skeleton";
import UtilInfoOption from "../Option";

// eslint-disable-next-line sonarjs/cognitive-complexity
const UtilInfoPaymentOptions = () => {
    const utilInfoApi = new UtilInfoApi();
    const paymentOptions = utilInfoApi.getPaymentOptions();

    const { isClientMobile } = useAppContext();

    return paymentOptions?.data ? (
        <>
            {paymentOptions.data.map(({ title, icon, options }) => (
                <SpaceWrapper
                    key={title}
                    borderBottom={isClientMobile}
                    margin={
                        isClientMobile
                            ? `${theme.space.x4} ${theme.space.x2}`
                            : theme.space.x0
                    }
                >
                    <Row alignItems="start" gap={theme.space.x4}>
                        <Column>
                            {icon &&
                                mappedIcons(icon?.title, {
                                    width: icon?.width
                                        ? Number(icon.width)
                                        : undefined,
                                    height: icon?.height
                                        ? Number(icon.height)
                                        : undefined,
                                    color: icon?.color || undefined,
                                })}
                            <Title fontSize={theme.typography.fontSize.xs}>
                                {title}
                            </Title>
                        </Column>

                        <Column>
                            <Row
                                display="flex"
                                flexDirection={
                                    isClientMobile ? "row" : "column"
                                }
                            >
                                {options?.length &&
                                    options.map(option => (
                                        <UtilInfoOption
                                            key={option.title}
                                            {...option}
                                        />
                                    ))}
                            </Row>
                        </Column>
                    </Row>
                </SpaceWrapper>
            ))}
        </>
    ) : paymentOptions?.isLoading ? (
        <Skeleton count={4} height={theme.space.x4} />
    ) : null;
};

export default UtilInfoPaymentOptions;
