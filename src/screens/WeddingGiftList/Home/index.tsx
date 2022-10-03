import { useEffect } from "react";
import { NextPageWithLayout } from "../../../../pages/_app";
import { useAppContext } from "../../../application/context/state";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import { ContainerFull } from "./style";
import ThirdSection from "./ThirdSection";

const WeddingGiftListHome: NextPageWithLayout = () => {
    const { onPageWeddingList } = useAppContext();

    useEffect(() => {
        onPageWeddingList();
        document.title =
            "Lista de Casamento Ferreira Costa | Crie sua Lista Online, Grátis";
    }, [onPageWeddingList]);

    return (
        <ContainerFull>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </ContainerFull>
    );
};

// const headerProps: HeaderProps = {
//     clientLocationContainerProps: {
//         backgroundColor: theme.colors.primary["200"],
//         color: theme.colors.neutral["000"],
//     },
// };

// WeddingGiftListHome.getLayout = (page: ReactElement) => {
//     return (
//         <>
//             <Head />
//             <Header {...headerProps} />
//             <Main>{page}</Main>
//             <Footer />
//         </>
//     );
// };

export default WeddingGiftListHome;
