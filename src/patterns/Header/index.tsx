/* eslint-disable import/named */
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../application/context/state";

import { NavBarMobile } from "./components/mobile/NavBarMobile";
import { SearchInput } from "./components/SearchInput";
import { NavBarDesktop } from "./components/NavBarDesktop";
import { CartButton } from "./components/CartButton";

import {
    Banner,
    ContentHeaderMobile,
    Divider,
    HamburgerIcon,
    HeaderContainer,
    MobileLogoFerreiraCosta,
    FlexContainerCenterHeaderCustom,
    FlexContainerNavCenterHeaderCustom,
    // ClientLocationContainerProps,
} from "./styles";
import { ListCategories } from "./components/ListCategories";
import { SidebarMenuMobile } from "./components/mobile/SidebarMenuMobile";
import { SidebarMenuRefProps } from "../../types/SidebarMenoRefProps";
import { HomeCategoriesProvider } from "../../application/context/Catalog/HomeCategories";
import Link from "../../components/Link";

type LinkProps = {
    title: string;
    redirectTo: string;
};

type BannerProps = {
    title?: string;
    link?: LinkProps;
};

export interface HeaderProps {
    bannerProps?: BannerProps;
    // clientLocationContainerProps?: ClientLocationContainerProps;
}

type BranchProps = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

const bannerExample = {
    title: "Começou o nosso aniversário com grandes ofertas e um festão de cupons para você aproveitar. Vem comemorar com a gente!",
    link: {
        title: "SAIBA MAIS",
        redirectTo: "https://www.ferreiracosta.com/Destaque/aniversario-fc",
    },
};

const footerCategoriesContentHeader = [
    {
        title: "Construção",
        path: "https://www.ferreiracosta.com/Destaque/construcao",
    },
    {
        title: "Móveis",
        path: "https://www.ferreiracosta.com/Destaque/moveis-categoria",
    },
    {
        title: "Ar e ventilação",
        path: "https://www.ferreiracosta.com/Destaque/ar-ventilacao-categoria",
    },
    {
        title: "Decoração",
        path: "https://www.ferreiracosta.com/Destaque/decoracao-categoria",
    },
    {
        title: "Eletrodomésticos",
        path: "https://www.ferreiracosta.com/Destaque/eletrodomesticos-categoria",
    },
    {
        title: "Utilidades dométicas",
        path: "https://www.ferreiracosta.com/Destaque/utilidades-domesticas-categoria",
    },
    {
        title: "Ferramentas",
        path: "https://www.ferreiracosta.com/Destaque/ferramentas-e-epi-categoria",
    },
    {
        title: "Eletroportáteis",
        path: "https://www.ferreiracosta.com/Destaque/eletroportateis-categoria",
    },
    {
        title: "Iluminação",
        path: "https://www.ferreiracosta.com/Destaque/iluminacao-categoria",
    },
];

const Header = ({ bannerProps = bannerExample }: HeaderProps) => {
    const [location] = useState<BranchProps>(2);
    const [isOpenSidebarMenu, setIsOpenSidebarMenu] = useState<boolean>(false);

    const sidebarMenuRef = useRef<SidebarMenuRefProps>(null);

    const { isClientMobile, isPageWeddingList } = useAppContext();

    function handleOpenSidebarMenu() {
        setIsOpenSidebarMenu(state => !state);
    }

    useEffect(() => {
        function handleCloseOutsideSideBarMenu() {
            if (sidebarMenuRef.current) {
                setIsOpenSidebarMenu(false);
            }
        }

        document.body.addEventListener(
            "click",
            handleCloseOutsideSideBarMenu,
            true
        );
    }, [isOpenSidebarMenu, sidebarMenuRef]);

    return (
        <HomeCategoriesProvider>
            {isClientMobile ? (
                <SidebarMenuMobile
                    sidebarMenuRef={sidebarMenuRef as SidebarMenuRefProps}
                    isOpenSidebarMenu={isOpenSidebarMenu}
                    onCloseSidebarMenu={() => setIsOpenSidebarMenu(false)}
                />
            ) : null}
            <HeaderContainer>
                {bannerProps && (
                    <Banner isPageWeddingList={isPageWeddingList}>
                        <span>{bannerProps.title}</span>
                        <a href={bannerProps.link?.redirectTo}>
                            {bannerProps.link?.title}
                        </a>
                    </Banner>
                )}
                <section>
                    {isClientMobile ? (
                        <NavBarMobile location={location} />
                    ) : (
                        <FlexContainerNavCenterHeaderCustom
                            isPageWeddingList={isPageWeddingList}
                        >
                            <NavBarDesktop location={location} />
                        </FlexContainerNavCenterHeaderCustom>
                    )}
                    <Divider isWithoutMargin />
                    {isClientMobile ? (
                        <ContentHeaderMobile>
                            <HamburgerIcon
                                onClick={() => handleOpenSidebarMenu()}
                            />

                            <Link target="_self" href="/?IsOpen=False">
                                <MobileLogoFerreiraCosta
                                    src="https://d3gcmglegmnvz8.cloudfront.net/logo/logo_fc.svg"
                                    alt="Logo escrito Ferreira Costa, em branco com bordas vermelhas"
                                />
                            </Link>
                            <CartButton />
                        </ContentHeaderMobile>
                    ) : (
                        <FlexContainerCenterHeaderCustom>
                            <ListCategories
                                footerCategoriesContentHeader={
                                    footerCategoriesContentHeader
                                }
                            />
                        </FlexContainerCenterHeaderCustom>
                    )}
                    {isClientMobile ? <SearchInput /> : null}
                    <Divider isWithShadow />
                </section>
            </HeaderContainer>
        </HomeCategoriesProvider>
    );
};

export { Header };
