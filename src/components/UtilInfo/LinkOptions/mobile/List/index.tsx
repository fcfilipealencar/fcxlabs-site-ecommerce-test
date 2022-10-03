import { useState } from "react";
import { UtilInfoDto } from "../../../../../dto/UtilInfo";
import { theme } from "../../../../../helpers/themes";
import { Accordion } from "../../../../../ui/Accordion";
import { Column } from "../../../../../ui/Column";
import { FlexContainer } from "../../../../../ui/Container/Flex";
import { ArrowDown, ArrowUp, mappedIcons } from "../../../../../ui/Icons";
import { Row } from "../../../../../ui/Row";
import { SpaceWrapper } from "../../../../../ui/SpaceWrapper";
import { Title } from "../../../../../ui/Typography/Title";
import UtilInfoOption from "../../../Option";

const UtilInfoLinkOptionMobileList = ({
    title,
    icon,
    options,
}: UtilInfoDto) => {
    const [titleClicked, setTitleClicked] = useState(false);

    const toggleTitleClicked = () => {
        setTitleClicked(!titleClicked);
    };

    return (
        <>
            <Row justifyContent="center" onClick={toggleTitleClicked}>
                <Column xs="11">
                    <FlexContainer gap={theme.space.x6} alignItems="center">
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
                        <Title
                            fontSize={theme.typography.fontSize.xs}
                            fontWeight={theme.typography.fontWeight["400"]}
                        >
                            {title}
                        </Title>
                    </FlexContainer>
                </Column>
                <Column xs="1">
                    {titleClicked ? <ArrowUp /> : <ArrowDown />}
                </Column>
            </Row>

            <Accordion show={titleClicked} maxHeight={theme.space.x160}>
                <SpaceWrapper margin={`${theme.space.x2} ${theme.space.x11}`}>
                    {options?.length &&
                        options.map(option => (
                            <UtilInfoOption key={option.title} {...option} />
                        ))}
                </SpaceWrapper>
            </Accordion>
        </>
    );
};

export default UtilInfoLinkOptionMobileList;
