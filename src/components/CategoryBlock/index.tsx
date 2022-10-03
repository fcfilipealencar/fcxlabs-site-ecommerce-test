import CategoryDto from "../../dto/Category";
import { theme } from "../../helpers/themes";
import CatalogApi from "../../services/apis/Catalog";
import { Aggregator } from "../../ui/Aggregator";
import { Text } from "../../ui/Typography/Text";
import { Title } from "../../ui/Typography/Title";
import Link from "../Link";
import { Skeleton } from "../Skeleton";
import { Wrapper } from "./style";

export interface CategoryBlockProps {
    category: CategoryDto;
    level: 1 | 2 | 3;
}

const CategoryBlock = ({
    category: { title, id },
    level,
}: CategoryBlockProps) => {
    const catalogApi = new CatalogApi();

    let jsxElement: JSX.Element | null = null;

    switch (level) {
        case 1: {
            jsxElement = (
                <Title key={title} fontSize={theme.typography.fontSize.xs}>
                    {title}
                </Title>
            );
            break;
        }
        case 2: {
            const { data, isLoading } = catalogApi.getHomeCategories(id);

            jsxElement = (
                <Wrapper width={theme.space.x48}>
                    <Aggregator
                        key={title}
                        background={theme.colors.neutral["050"]}
                    >
                        <Text
                            fontSize={theme.typography.fontSize.ssm}
                            fontWeight={theme.typography.fontWeight["600"]}
                            color={theme.colors.neutral["800"]}
                        >
                            {title}
                        </Text>
                        <Aggregator background={theme.colors.neutral["050"]}>
                            {data ? (
                                data.map(({ title: innerCategoryTitle }) => (
                                    <Text
                                        key={innerCategoryTitle}
                                        fontSize={theme.typography.fontSize.xs}
                                        fontWeight={
                                            theme.typography.fontWeight["500"]
                                        }
                                    >
                                        <Link
                                            href={`Categoria/${innerCategoryTitle
                                                .toLowerCase()
                                                .replace(/\s/g, "-")}`}
                                            target="_self"
                                            fontSize={
                                                theme.typography.fontSize.xs
                                            }
                                            color={theme.colors.neutral["900"]}
                                            mouseOver={{
                                                color: theme.colors.primary[
                                                    "200"
                                                ],
                                            }}
                                        >
                                            {innerCategoryTitle}
                                        </Link>
                                    </Text>
                                ))
                            ) : isLoading ? (
                                <Skeleton count={10} />
                            ) : null}
                        </Aggregator>
                    </Aggregator>
                </Wrapper>
            );
            break;
        }
        case 3: {
            jsxElement = <>Substitua aqui o template do nível 3</>;
            break;
        }
        default: {
            break;
        }
    }

    return jsxElement;
};

export default CategoryBlock;
