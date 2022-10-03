import type { NextPage } from "next";
// import Script from "next/script";
import { useAppContext } from "../../application/context/state";
import { theme } from "../../helpers/themes";
import { CategoriesScrollerMobile } from "../../patterns/Header/components/mobile/CategoriesScrollerMobile";
import { Banner } from "../../patterns/Header/styles";
import { Column } from "../../ui/Column";
import { Row } from "../../ui/Row";
import { SpaceWrapper } from "../../ui/SpaceWrapper";

const listCategories = [
    {
        name: "138 anos, 138 ofertas",
    },
    {
        name: "Novidades FC",
    },
    {
        name: "Eletro e Eletrônicos",
    },
    {
        name: "Utilidades dométicas",
    },
    {
        name: "Móveis e acessórios",
    },
    {
        name: "Decoração",
    },
    {
        name: "Pisos e Revestimentos",
    },
    {
        name: "Ar e Ventilação",
    },
];

const Home: NextPage = () => {
    const { isClientMobile } = useAppContext();

    return (
        <>
            {/* <Script
                id="apps-flyer-banner"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `! function(t, e, n, s, a, c, i, o, p) {
                            t.AppsFlyerSdkObject = a, t.AF = t.AF || function() {
                                (t.AF.q = t.AF.q || []).push([Date.now()].concat(Array.prototype.slice.call(arguments)))
                            }, t.AF.id = t.AF.id || i, t.AF.plugins = {}, o = e.createElement(n), p = e.getElementsByTagName(n)[0], o.async = 1, o.src = "https://websdk.appsflyer.com?" + (c.length > 0 ? "st=" + c.split(",").sort().join(",") + "&" : "") + (i.length > 0 ? "af_id=" + i : ""), p.parentNode.insertBefore(o, p)
                        }(window, document, "script", 0, "AF", "banners", {
                            banners: {
                                key: "dcaea741-1ff9-4a65-8eff-c0dec957b468"
                            }
                        })
                        AF('banners', 'showBanner')`,
                }}
            /> */}
            {isClientMobile && (
                <CategoriesScrollerMobile listCategories={listCategories} />
            )}
            <SpaceWrapper padding={theme.space.x8}>
                <Row display="flex">
                    <Column md="6">
                        <SpaceWrapper
                            margin={`${theme.space.x0} ${theme.space.x4}`}
                        >
                            <Banner />
                        </SpaceWrapper>
                    </Column>
                    <Column md="6">
                        <SpaceWrapper
                            margin={`${theme.space.x0} ${theme.space.x4}`}
                        >
                            <Banner />
                        </SpaceWrapper>
                    </Column>
                </Row>
            </SpaceWrapper>
        </>
    );
};

export default Home;
