import { theme } from "../../helpers/themes";
import SupportContactApi from "../../services/apis/SupportContact";
import { Aggregator } from "../../ui/Aggregator";
import { Desk, DeskInfo } from "../../ui/Desk";
import { mappedIcons } from "../../ui/Icons";
import { IconWrapper } from "../../ui/IconWrapper";
import { Text } from "../../ui/Typography/Text";
import { Title } from "../../ui/Typography/Title";
import Link from "../Link";
import { Skeleton } from "../Skeleton";

const SupportContact = () => {
    const supportContactApi = new SupportContactApi();
    const { data, isLoading } = supportContactApi.getOptions();

    return (
        <Aggregator
            id="support-contact-container"
            data-testid="support-contact-container"
            display="flex"
            flexDirection="row"
            justifyContent="start"
            border={`1px solid ${theme.colors.neutral["100"]}`}
            borderRadius={theme.space.x1}
            padding={theme.space.x6}
            mobile={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
            }}
            laptopL={{
                margin: `${theme.space.x8} ${theme.space.x6} ${theme.space.x2}`,
            }}
            desktop={{
                margin: `${theme.space.x8} ${theme.space.x36} ${theme.space.x2}`,
            }}
        >
            {data ? (
                data.map(
                    (
                        { mainIcon, title, description, link, secondaryIcons },
                        index
                    ) => (
                        <Desk
                            key={title}
                            hasRightBorder={index !== data.length - 1}
                        >
                            <DeskInfo>
                                <IconWrapper>
                                    {mappedIcons(mainIcon.title, {
                                        color: "white",
                                    })}
                                </IconWrapper>
                            </DeskInfo>
                            <DeskInfo>
                                <Title>{title}</Title>

                                {description && <Text>{description}</Text>}

                                {link && (
                                    <Link href={link.href}>{link.title}</Link>
                                )}

                                {secondaryIcons?.length && (
                                    <Aggregator
                                        display="flex"
                                        flexDirection="row"
                                        margin={`${theme.space.x4} 0 0`}
                                    >
                                        {secondaryIcons.map(
                                            ({
                                                title: iconTitle,
                                                link: iconLink,
                                            }) => (
                                                <IconWrapper
                                                    key={iconLink}
                                                    width={theme.space.x6}
                                                    height={theme.space.x6}
                                                    color={
                                                        theme.colors.neutral[
                                                            "300"
                                                        ]
                                                    }
                                                    borderRadius={
                                                        theme.space.x1
                                                    }
                                                    clickable
                                                    mouseOverColor={
                                                        theme.colors.primary[
                                                            "200"
                                                        ]
                                                    }
                                                >
                                                    <Link href={iconLink || ""}>
                                                        {mappedIcons(
                                                            iconTitle,
                                                            {
                                                                color: "white",
                                                            }
                                                        )}
                                                    </Link>
                                                </IconWrapper>
                                            )
                                        )}
                                    </Aggregator>
                                )}
                            </DeskInfo>
                        </Desk>
                    )
                )
            ) : isLoading ? (
                <Skeleton count={3} />
            ) : null}
        </Aggregator>
    );
};

export default SupportContact;
