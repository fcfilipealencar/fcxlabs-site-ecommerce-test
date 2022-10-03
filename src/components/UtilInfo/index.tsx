import { useAppContext } from "../../application/context/state";
import { theme } from "../../helpers/themes";
import { Aggregator } from "../../ui/Aggregator";
import { Column } from "../../ui/Column";
import { Row } from "../../ui/Row";
import { SpaceWrapper } from "../../ui/SpaceWrapper";
import LogoImage from "../LogoImage";
import UtilInfoLinkOptions from "./LinkOptions";
import UtilInfoLinkOptionsMobile from "./LinkOptions/mobile";
import UtilInfoPaymentOptions from "./PaymentOptions";

const UtilInfo = () => {
    const { isClientMobile } = useAppContext();

    return (
        <Aggregator
            id="util-info-container"
            data-testid="util-info-container"
            padding={`${theme.space.x10} ${theme.space.x6}`}
            borderBottom={`2px solid ${theme.colors.neutral["200"]}`}
            mobile={{
                margin: `${theme.space.x0}`,
                padding: theme.space.x0,
            }}
            laptopL={{
                margin: `${theme.space.x8} ${theme.space.x0} ${theme.space.x2}`,
            }}
            desktop={{
                margin: `${theme.space.x8} ${theme.space.x36} ${theme.space.x2}`,
            }}
        >
            <Row
                display="flex"
                flexDirection={isClientMobile ? "column-reverse" : "row"}
                justifyContent="start"
                alignItems="start"
            >
                <Column md="6">
                    <SpaceWrapper
                        margin={
                            isClientMobile
                                ? `${theme.space.x0} ${theme.space.x4}`
                                : theme.space.x0
                        }
                    >
                        <Row>
                            {!isClientMobile && (
                                <Column md="6">
                                    <LogoImage />
                                </Column>
                            )}

                            <Column md="6" xs="12">
                                <UtilInfoPaymentOptions />
                            </Column>
                        </Row>
                    </SpaceWrapper>
                </Column>

                <Column md="6">
                    <Row>
                        {isClientMobile ? (
                            <UtilInfoLinkOptionsMobile />
                        ) : (
                            <UtilInfoLinkOptions />
                        )}
                    </Row>
                </Column>
            </Row>
        </Aggregator>
    );
};

export default UtilInfo;
