/* eslint-disable no-void */
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { SignInStyle } from "./styles";

const SignInPage = () => {
    const { data: session, status } = useSession();
    useEffect(() => {
        console.log("session ", session);
        if (!(status === "loading") && !session) console.log("Authenticated");
        void signIn("apple").then(e => console.log(e));

        if (session) window.close();
    }, [session, status]);

    return <SignInStyle />;
};

export default SignInPage;
