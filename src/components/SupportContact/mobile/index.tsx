import { theme } from "../../../helpers/themes";
import Carousel from "../../../patterns/Carousel";
import SupportContactApi from "../../../services/apis/SupportContact";
import { Aggregator } from "../../../ui/Aggregator";
import { DeskInfo } from "../../../ui/Desk";
import { mappedIcons } from "../../../ui/Icons";
import { IconWrapper } from "../../../ui/IconWrapper";
import { Text } from "../../../ui/Typography/Text";
import { Title } from "../../../ui/Typography/Title";
import Link from "../../Link";
import { Skeleton } from "../../Skeleton";

const SupportContactMobile = () => {
    const supportContactApi = new SupportContactApi();
    const { data, isLoading } = supportContactApi.getOptions();

    return data ? (
        <Carousel autoPlay infiniteLoop showArrows={false}>
            {data.map(
                (
                    { mainIcon, title, description, link, secondaryIcons },
                    index
                ) => (
                    <Aggregator
                        key={index}
                        justifyContent="center"
                        display="flex"
                        alignItems="center"
                        padding={theme.space.x8}
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

                            {link && <Link href={link.href}>{link.title}</Link>}

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
                                                    theme.colors.neutral["300"]
                                                }
                                                borderRadius={theme.space.x1}
                                                clickable
                                                mouseOverColor={
                                                    theme.colors.primary["200"]
                                                }
                                            >
                                                <Link href={iconLink || ""}>
                                                    {mappedIcons(iconTitle, {
                                                        color: "white",
                                                    })}
                                                </Link>
                                            </IconWrapper>
                                        )
                                    )}
                                </Aggregator>
                            )}
                        </DeskInfo>
                    </Aggregator>
                )
            )}
        </Carousel>
    ) : isLoading ? (
        <Skeleton count={3} />
    ) : null;
};

export default SupportContactMobile;
