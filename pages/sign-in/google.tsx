/* eslint-disable no-void */
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { ContentSignInStyle, SignInStyle } from "./styles";

const SignInPage = () => {
    const { data: session, status } = useSession();
    useEffect(() => {
        if (!(status === "loading") && !session)
            void signIn("google", {
                // eslint-disable-next-line no-restricted-globals
                callbackUrl: `${location.origin}/sign-in/google`,
            });

        // if (session) window.close();
    }, [session, status]);

    return (
        <ContentSignInStyle>
            <SignInStyle />
        </ContentSignInStyle>
    );
};

export default SignInPage;
