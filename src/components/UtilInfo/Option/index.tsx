import { useAppContext } from "../../../application/context/state";
import { Option } from "../../../dto/UtilInfo";
import { theme } from "../../../helpers/themes";
import { Aggregator } from "../../../ui/Aggregator";
import { Text } from "../../../ui/Typography/Text";
import Image from "../../Image";
import Link from "../../Link";

const UtilInfoOption = ({
    title: optionTitle,
    link: optionLink,
    images: optionImages,
}: Option) => {
    const { isClientMobile } = useAppContext();

    return (
        <Aggregator
            key={optionTitle}
            display="flex"
            flexDirection="column"
            alignItems="start"
            gap={theme.space["x3.5"]}
            margin={`${theme.space.x4} ${theme.space.x0} ${theme.space.x0}`}
            mobile={{
                margin: `${theme.space.x4} ${theme.space.x0}`,
            }}
        >
            {optionLink ? (
                <Link
                    href={optionLink.href}
                    fontSize={
                        isClientMobile
                            ? theme.typography.fontSize.xs
                            : theme.typography.fontSize.xxs
                    }
                    color={theme.colors.neutral["800"]}
                    mouseOver={{
                        color: theme.colors.primary["200"],
                    }}
                >
                    {optionLink.title}
                </Link>
            ) : (
                <Text
                    fontSize={
                        isClientMobile
                            ? theme.typography.fontSize.xs
                            : theme.typography.fontSize.xxs
                    }
                    color={theme.colors.neutral["800"]}
                    margin={theme.space.x0}
                >
                    {optionTitle}
                </Text>
            )}

            {optionImages?.length && (
                <Aggregator display="flex" gap={theme.space.x1}>
                    {optionImages.map(
                        ({ src, alt, width, height, layout = "fixed" }) => (
                            <Image
                                key={src}
                                src={src}
                                alt={alt}
                                width={width}
                                height={height}
                                layout={layout}
                            />
                        )
                    )}
                </Aggregator>
            )}
        </Aggregator>
    );
};

export default UtilInfoOption;
