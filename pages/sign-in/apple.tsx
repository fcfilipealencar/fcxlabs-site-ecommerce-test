/* eslint-disable no-void */
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ContentSignInStyle, SignInStyle } from "./styles";

const SignInPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (!(status === "loading") && !session)
            void signIn("apple").then(() => {
                return router.push("/sign-in/apple");
            });

        if (session) window.close();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session, status]);

    return (
        <ContentSignInStyle>
            <SignInStyle />
            <span>Um momento...</span>
        </ContentSignInStyle>
    );
};

export default SignInPage;
