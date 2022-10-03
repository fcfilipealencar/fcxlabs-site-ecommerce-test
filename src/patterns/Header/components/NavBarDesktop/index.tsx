import { useAppContext } from "../../../../application/context/state";
import Link from "../../../../components/Link";
import { theme } from "../../../../helpers/themes";
import { ArrowDownIcon, LocationIcon, NavBarDesktopContainer } from "./styles";

const locationBranches = {
    1: "Garanhuns-PE",
    2: "Recife-PE",
    3: "Salvador-BA",
    // é iniciado como 2 nos cookies do site
    4: "Outras Cidades",
    5: "Aracaju-SE",
    6: "João Pessoa-PB",
    7: "Natal-RN",
    8: "Caruaru-PE",
};

const entrepriseProducts = [
    {
        title: "Lista de Casamento",
        path: "https://www.ferreiracosta.com/lista-de-casamento/",
    },
    {
        title: "Nossas Lojas",
        path: "https://ferreiracosta.movidesk.com/kb/article/156436/nossas-lojas?ticketId=&q=",
    },
    {
        title: "Para Empresas",
        path: "http://empresas.ferreiracosta.com/",
    },
    {
        title: "Clube do Profissional",
        path: "https://clubedoprofissional.ferreiracosta.com/",
    },
];

interface NavBarDesktopProps {
    location: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    color?: string;
}

const NavBarDesktop = ({ location, color }: NavBarDesktopProps) => {
    const { isPageWeddingList } = useAppContext();

    return (
        <NavBarDesktopContainer isPageWeddingList={isPageWeddingList}>
            <section>
                <div>
                    <LocationIcon isPageWeddingList={isPageWeddingList} />
                    <span>
                        Você está em{" "}
                        <strong>{locationBranches[`${location}`]}</strong>
                        <ArrowDownIcon isPageWeddingList={isPageWeddingList} />
                    </span>
                </div>
                <aside>
                    {entrepriseProducts &&
                        entrepriseProducts.map(product => (
                            <Link
                                key={product.title}
                                href={product.path}
                                color={color || theme.colors.neutral["900"]}
                            >
                                {product.title}
                                <span>|</span>
                            </Link>
                        ))}
                </aside>
            </section>
        </NavBarDesktopContainer>
    );
};

export { NavBarDesktop };
