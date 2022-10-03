import { NextPage } from "next";
import type { AppProps } from "next/app";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SnackbarProvider from "react-simple-snackbar";
import { SessionProvider } from "next-auth/react";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Session } from "next-auth";
import { AppWrapper } from "../src/application/context/state";
import Layout from "../src/components/Layout";
import { GlobalStyles } from "../src/config/styles";
import "../src/config/styles/fonts.css";
import { theme } from "../src/helpers/themes";
// import runMockServiceWorker from "../src/services/mocks";
import { AuthProvider } from "../src/application/context/Identity/AuthContext";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

const MyApp = ({
    Component,
    pageProps: { ...pageProps },
}: AppPropsWithLayout) => {
    // if (process.env.NODE_ENV === "development") {
    //     runMockServiceWorker();
    // }
    // runMockServiceWorker();

    return Component.getLayout ? (
        Component.getLayout(
            <>
                <GlobalStyles />
                <ThemeProvider theme={theme}>
                    <SessionProvider
                        session={(pageProps as { session: Session }).session}
                    >
                        <AuthProvider>
                            <SnackbarProvider>
                                <AppWrapper>
                                    <Component {...pageProps} />
                                </AppWrapper>
                            </SnackbarProvider>
                        </AuthProvider>
                    </SessionProvider>
                </ThemeProvider>
            </>
        )
    ) : (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <SessionProvider
                    session={(pageProps as { session: Session }).session}
                >
                    <AuthProvider>
                        <SnackbarProvider>
                            <AppWrapper>
                                <Layout>
                                    <Component {...pageProps} />
                                </Layout>
                            </AppWrapper>
                        </SnackbarProvider>
                    </AuthProvider>
                </SessionProvider>
            </ThemeProvider>
        </>
    );
};

export default MyApp;
