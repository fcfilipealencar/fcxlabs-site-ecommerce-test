/* eslint-disable no-void */
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { SignInStyle } from "./styles";

const SignInPage = () => {
    const { data: session, status } = useSession();
    useEffect(() => {
        if (!(status === "loading") && !session) void signIn("apple");

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        if ("expires" in session!) window.close();
    }, [session, status]);

    return <SignInStyle />;
};

export default SignInPage;
