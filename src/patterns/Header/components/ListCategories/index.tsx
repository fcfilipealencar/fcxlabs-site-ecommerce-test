/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-restricted-globals */

import { useContext, useState } from "react";
import {
    CategoryProps,
    HomeCategoriesContext,
} from "../../../../application/context/Catalog/HomeCategories";
import { useAuth } from "../../../../application/context/Identity/AuthContext";
import Link from "../../../../components/Link";
import {
    DesktopLogoFerreiraCosta,
    Divider,
    HamburgerIcon,
    ImageCircle,
    RingIcon,
    UserIcon,
} from "../../styles";
import { CartButton } from "../CartButton";
import { ModalAuthentication } from "../ModalAuthentication";
import { SearchInput } from "../SearchInput";
import {
    ArrowLeftIcon,
    CategoryButtonDropDown,
    CategoryListedInDropdown,
    CategoryTitle,
    ContentHeaderCategoriesDesktop,
    ContentHeaderDesktop,
    DropdownContainer,
    DropdownWrapper,
    ItemsTitle,
    ListCategoriesContainerHeader,
    SubCategoryTitle,
    SubMenuContainer,
    SubMenuContent,
    WrapperList,
} from "./styles";

type CategoriesData = {
    title: string;
    path: string;
};

interface ListCategoriesProps {
    footerCategoriesContentHeader: CategoriesData[];
}

const ListCategories = ({
    footerCategoriesContentHeader,
}: ListCategoriesProps) => {
    const { isAuthenticated, userData } = useAuth();
    const { allCategories } = useContext(HomeCategoriesContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isOpenedLogin, setIsOpenedLogin] = useState<boolean>(false);

    function handleManagementDropdownOpenOrCloser() {
        setIsDropdownOpen(state => !state);
    }

    function handleManagementOpenOrCloserLogin() {
        event?.preventDefault();
        setIsOpenedLogin(state => !state);
    }

    function handleProfileDropdown() {
        event?.preventDefault();
    }

    return (
        <ListCategoriesContainerHeader>
            <ContentHeaderDesktop>
                <main>
                    <Link target="_self" href="/">
                        <DesktopLogoFerreiraCosta
                            src="https://d3gcmglegmnvz8.cloudfront.net/logo/logo_fc.svg"
                            alt="Logo escrito Ferreira Costa, em branco com bordas vermelhas"
                        />
                    </Link>
                    <SearchInput isDesktop />
                </main>
                <aside>
                    <section>
                        <Link href="/lista-de-casamento" target="_self">
                            <RingIcon />
                            <strong>
                                Lista de <br /> casamento
                            </strong>
                        </Link>

                        <Link
                            href="/"
                            onClick={
                                isAuthenticated
                                    ? handleProfileDropdown
                                    : handleManagementOpenOrCloserLogin
                            }
                        >
                            {isAuthenticated ? (
                                <>
                                    <ImageCircle>
                                        <strong>{userData.name[0]}</strong>
                                    </ImageCircle>
                                    <strong>
                                        Olá, <br /> {userData.name}
                                    </strong>
                                </>
                            ) : (
                                <>
                                    <UserIcon />
                                    <strong>
                                        Entrar ou <br />
                                        criar conta
                                    </strong>
                                </>
                            )}
                        </Link>
                        <ModalAuthentication
                            isOpenedLogin={isOpenedLogin}
                            onCloseModalAuthentication={
                                handleManagementOpenOrCloserLogin
                            }
                        />
                    </section>
                    <CartButton />
                </aside>
            </ContentHeaderDesktop>
            <ContentHeaderCategoriesDesktop>
                <CategoryButtonDropDown
                    onClick={() => handleManagementDropdownOpenOrCloser()}
                >
                    <DropdownContainer isDropdownOpen={isDropdownOpen}>
                        {allCategories && (
                            <DropdownWrapper>
                                <ul>
                                    {allCategories?.map(
                                        (category: CategoryProps) => (
                                            <li key={category.id}>
                                                <WrapperList>
                                                    <CategoryListedInDropdown
                                                        key={category.id}
                                                        href={category.title}
                                                    >
                                                        {category.title}
                                                    </CategoryListedInDropdown>
                                                    <ArrowLeftIcon />
                                                </WrapperList>
                                                <SubMenuContainer>
                                                    <SubMenuContent>
                                                        <header>
                                                            <CategoryTitle
                                                                key={
                                                                    category.id
                                                                }
                                                                href="/"
                                                            >
                                                                {category.title}
                                                            </CategoryTitle>
                                                            <Divider />
                                                        </header>
                                                        <section>
                                                            {category?.categories?.map(
                                                                subCategory => (
                                                                    <div
                                                                        key={
                                                                            subCategory.id
                                                                        }
                                                                    >
                                                                        <SubCategoryTitle href="/">
                                                                            {
                                                                                subCategory.title
                                                                            }
                                                                        </SubCategoryTitle>
                                                                        {subCategory?.categories?.map(
                                                                            (
                                                                                item: CategoryProps
                                                                            ) => (
                                                                                <ItemsTitle
                                                                                    key={
                                                                                        item.id
                                                                                    }
                                                                                    href="/"
                                                                                >
                                                                                    {
                                                                                        item.title
                                                                                    }
                                                                                </ItemsTitle>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                )
                                                            )}
                                                        </section>
                                                    </SubMenuContent>
                                                </SubMenuContainer>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </DropdownWrapper>
                        )}
                    </DropdownContainer>
                    <HamburgerIcon />
                    <strong>Categorias</strong>
                </CategoryButtonDropDown>

                <section>
                    {footerCategoriesContentHeader &&
                        footerCategoriesContentHeader.map(category => (
                            <Link key={category.title} href={category.path}>
                                {category.title}
                            </Link>
                        ))}
                </section>
            </ContentHeaderCategoriesDesktop>
        </ListCategoriesContainerHeader>
    );
};

export { ListCategories };
