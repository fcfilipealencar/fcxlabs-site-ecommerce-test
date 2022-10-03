import { ReactNode } from "react";
import Head from "../../infra/components/next/Head";
import Footer from "../../patterns/Footer";
import Main from "../../patterns/Main";
import { Header, HeaderProps } from "../../patterns/Header";

export interface LayoutProps {
    children: ReactNode;
    headerProps?: HeaderProps;
}

const bannerProps = {
    title: "Começou o nosso aniversário com grandes ofertas e um festão de cupons para você aproveitar. Vem comemorar com a gente!",
    link: {
        title: "SAIBA MAIS",
        redirectTo: "https://www.ferreiracosta.com/Destaque/aniversario-fc",
    },
};

const Layout = ({ children, headerProps = { bannerProps } }: LayoutProps) => {
    return (
        <>
            <Head />
            <Header {...headerProps} />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

export default Layout;
