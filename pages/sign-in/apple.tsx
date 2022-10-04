/* eslint-disable no-void */
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { SignInStyle } from "./styles";

const SignInPage = () => {
    const { data: session, status } = useSession();
    useEffect(() => {
        if (!(status === "loading") && !session)
            void signIn("apple").then(() => {
                if (session) window.close();
            });

        if (status === "authenticated") {
            window.close();
        }
    }, [session, status]);

    return <SignInStyle />;
};

export default SignInPage;
