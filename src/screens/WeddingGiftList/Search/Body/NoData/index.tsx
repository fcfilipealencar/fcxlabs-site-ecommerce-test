import Image from "../../../../../components/Image";
import { theme } from "../../../../../helpers/themes";
import { FlexContainer } from "../../../../../ui/Container/Flex";
import { SearchNoDataText } from "./style";

const SearchBodyNoData = () => {
    return (
        <FlexContainer
            flexDirection="column"
            alignItems="center"
            gap={theme.space.x6}
        >
            <Image
                src="https://fercos-s3-ecommerce.s3.amazonaws.com/lista-def/imagens/others/Emptyphoto.png"
                alt="Lupa de Busca"
                width="100px"
                height="100px"
                layout="fixed"
            />
            <SearchNoDataText
                fontSize={theme.typography.fontSize.sm}
                color={theme.colors.neutral["400"]}
            >
                Preencha os campos acima para buscar por alguma lista.
            </SearchNoDataText>
        </FlexContainer>
    );
};

export default SearchBodyNoData;
