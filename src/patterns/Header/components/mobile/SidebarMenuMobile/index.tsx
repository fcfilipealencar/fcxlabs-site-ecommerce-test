import Link from "../../../../../components/Link";
import { SidebarMenuRefProps } from "../../../../../types/SidebarMenoRefProps";
import { Divider } from "../../../styles";
import {
    SidebarMenuContainer,
    SidebarMenuHeader,
    TitleSidebarMenuHyperlink,
    UserSidebarMenuIcon,
    CloseSidebarMenuIcon,
    SidebarMenuHeaderContent,
    SubtitleSidebarMenuHyperlink,
    ListCategoriesSidebarMenu,
    CategorySidebarMenu,
    CategoryExploreIcon,
    GiftBoxIcon,
    ListContentSidebarMenuWrapper,
    EnterpriseProductSidebarMenu,
} from "./styles";

interface SidebarMenuProps {
    sidebarMenuRef: SidebarMenuRefProps;
    isOpenSidebarMenu: boolean;
    onCloseSidebarMenu: () => void;
}

const categoriesSideNavigation = [
    {
        title: "Construção",
        path: "/",
    },
    {
        title: "Móveis",
        path: "/",
    },
    {
        title: "Ar e ventilação",
        path: "/",
    },
    {
        title: "Decoração",
        path: "/",
    },
    {
        title: "Eletrodomésticos",
        path: "/",
    },
    {
        title: "Utilidades dométicas",
        path: "/",
    },
    {
        title: "Ferramentas",
        path: "/",
    },
    {
        title: "Eletroportáteis",
        path: "/",
    },
    {
        title: "Iluminação",
        path: "/",
    },
    {
        title: "Ver todas categorias",
        path: "/",
    },
];

const entrepriseProducts = [
    {
        title: "Lista de Casamento",
        path: "/lista-de-casamento",
    },
    {
        title: "Clube do Profissional",
        path: "https://clubedoprofissional.ferreiracosta.com/",
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
        title: "Televendas",
        path: "https://ferreiracosta.movidesk.com/kb/article/156443/qual-o-horario-de-funcionamento-e-contatos-do-vendas-corporativa?ticketId=&q=",
    },
    {
        title: "Política de Entrega",
        path: "https://ferreiracosta.movidesk.com/kb/article/156345/politica-de-entrega-da-ferreira-costa?ticketId=&q=",
    },
];

const SidebarMenuMobile = ({
    sidebarMenuRef,
    isOpenSidebarMenu,
    onCloseSidebarMenu,
}: SidebarMenuProps) => {
    return (
        <SidebarMenuContainer
            ref={sidebarMenuRef}
            isOpenSidebarMenu={isOpenSidebarMenu}
        >
            <SidebarMenuHeader>
                <section>
                    <UserSidebarMenuIcon />
                    <div>
                        <TitleSidebarMenuHyperlink>
                            Entrar ou
                        </TitleSidebarMenuHyperlink>
                        <TitleSidebarMenuHyperlink>
                            {" "}
                            Criar conta
                        </TitleSidebarMenuHyperlink>
                    </div>
                    <CloseSidebarMenuIcon onClick={onCloseSidebarMenu} />
                </section>
                <SidebarMenuHeaderContent>
                    <SubtitleSidebarMenuHyperlink href="https://www.ferreiracosta.com/Conta/MeusDados">
                        Meus Dados
                    </SubtitleSidebarMenuHyperlink>
                    <SubtitleSidebarMenuHyperlink href="https://www.ferreiracosta.com/Conta/MeusPedidos">
                        Meus Pedidos
                    </SubtitleSidebarMenuHyperlink>
                    <SubtitleSidebarMenuHyperlink href="https://www.ferreiracosta.com/Conta/MinhasComprasLoja.aspx">
                        Pedidos telefone / WhatsApp
                    </SubtitleSidebarMenuHyperlink>
                </SidebarMenuHeaderContent>
            </SidebarMenuHeader>
            <ListCategoriesSidebarMenu>
                <Link href="/lista-de-casamento">
                    <main>
                        <CategorySidebarMenu>
                            <GiftBoxIcon />
                            Lista de Casamento
                        </CategorySidebarMenu>
                    </main>
                </Link>
                <section>
                    <strong>Ofertas</strong>
                </section>
                {categoriesSideNavigation &&
                    categoriesSideNavigation.map(category => (
                        <Link key={category.title} href={category.path}>
                            <ListContentSidebarMenuWrapper>
                                <CategorySidebarMenu>
                                    {category.title}
                                </CategorySidebarMenu>
                                <CategoryExploreIcon />
                            </ListContentSidebarMenuWrapper>
                            <Divider isWithoutMargin />
                        </Link>
                    ))}
                {entrepriseProducts &&
                    entrepriseProducts.map(product => (
                        <Link key={product.title} href={product.path}>
                            <ListContentSidebarMenuWrapper isEnterpriseProduct>
                                <EnterpriseProductSidebarMenu>
                                    {product.title}
                                </EnterpriseProductSidebarMenu>
                            </ListContentSidebarMenuWrapper>
                            <Divider isWithoutMargin />
                        </Link>
                    ))}
            </ListCategoriesSidebarMenu>
        </SidebarMenuContainer>
    );
};

export { SidebarMenuMobile };
