/* eslint-disable no-void */
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { SignInStyle } from "./styles";

const SignInPage = () => {
    const { data: session, status } = useSession();
    useEffect(() => {
        if (!(status === "loading") && !session) console.log("Authenticated");
        void signIn("apple").then(() => window.close());

        if (session) window.close();
    }, [session, status]);

    return <SignInStyle />;
};

export default SignInPage;
