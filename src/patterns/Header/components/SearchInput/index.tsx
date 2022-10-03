import axios from "axios";
import { useEffect, useState } from "react";
import { InputSearch } from "../../../../ui/InputSearch";
import {
    ContainerSearchProduct,
    SearchProductHyperLink,
    SearchProductIcon,
} from "./styles";

interface SearchInputProps {
    isDesktop?: boolean;
}

const SearchInput = ({ isDesktop }: SearchInputProps) => {
    const [searchProduct, setSearchProduct] = useState<string>("");
    const [searchSuggestion, setSearchSuggestion] = useState<string[]>([""]);

    useEffect(() => {
        const onGetSearchSuggestions = async () => {
            const {
                data: { suggestions },
            } = await axios.get(
                `https://fcxlabs-ecommerce-dev-api.ferreiracosta.com/catalog/v1/suggestion?term=${searchProduct}`
            );
            setSearchSuggestion(suggestions);
        };

        onGetSearchSuggestions();
    }, [searchProduct]);

    return (
        <ContainerSearchProduct isDesktop={isDesktop}>
            <SearchProductHyperLink isDesktop={isDesktop}>
                <SearchProductIcon />
            </SearchProductHyperLink>
            <InputSearch
                id="search-product"
                autoComplete="off"
                list="search-products"
                name="search-products"
                type="text"
                placeholder="O que você está procurando?"
                value={searchProduct}
                onChange={event => setSearchProduct(event.target.value)}
            />
            <datalist id="search-products">
                {searchSuggestion &&
                    searchSuggestion.map(suggestion => (
                        <option key={suggestion} value={suggestion} />
                    ))}
            </datalist>
        </ContainerSearchProduct>
    );
};

export { SearchInput };
