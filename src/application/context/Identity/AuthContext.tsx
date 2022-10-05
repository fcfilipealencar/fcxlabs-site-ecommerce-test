/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from "react";
import jwt from "jwt-decode";
import { signIn, useSession } from "next-auth/react";
import { identityApi } from "./IdentityApiFactory";
import { GoogleAuthSessionProps, UserData, UserProps } from "./types/auth";

interface AuthContextProps {
    userData: UserData;
    isAuthenticated: boolean;
    onAuthenticateUser({ login, password }: UserProps): void;
    onAuthenticateUserFromGoogle(): void;
    signOut(): void;
    keepUserloggedIn: (
        providerType: string,
        token: string,
        accessToken: string
    ) => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [userData, setUserData] = useState<UserData>({} as UserData);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const { data: session, status } = useSession();

    const keepUserloggedIn = (
        providerType: string,
        token: string,
        accessToken?: string
    ) => {
        localStorage.setItem("@FC:Ecom:Token:Session", token);

        if (providerType === "google" && accessToken)
            localStorage.setItem("@FC:Ecom:Auth:Google", accessToken);

        const userDataDecoded = jwt<UserData>(token);

        setUserData(userDataDecoded);
        setIsAuthenticated(true);
    };

    async function onAuthenticateUser({ login, password }: UserProps) {
        try {
            const data = await identityApi.getToken({ login, password });
            console.log(JSON.stringify(data, null, 2));

            if (!data) {
                return;
            }

            keepUserloggedIn("google", data.access_token);
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
        }
    }

    // eslint-disable-next-line consistent-return
    async function onAuthenticateUserFromGoogle() {
        console.log(`1 SESSION: ${JSON.stringify(session, null, 2)}`);
        // if (status === "loading") {
        await signIn("google");
        // }
        console.log(`2 SESSION: ${JSON.stringify(session, null, 2)}`);

        if (!session && status === "unauthenticated") return null;
        console.log(`3 SESSION: ${JSON.stringify(session, null, 2)}`);

        if (status === "authenticated") {
            const { accessToken: token } =
                session as unknown as GoogleAuthSessionProps;

            const data = await identityApi.getTokenGoogleAuth({
                accessToken: token,
            });

            if (!data) return null;

            keepUserloggedIn("google", data.access_token, token.return);
        }
        console.log(`4 SESSION: ${JSON.stringify(session, null, 2)}`);
    }

    function verifyAccessToken() {
        const isUserAuthenticated = localStorage.getItem(
            "@FC:Ecom:Token:Session"
        );
        if (!isUserAuthenticated) {
            return;
        }
        const userDataDecoded = jwt<UserData>(isUserAuthenticated);

        setUserData(userDataDecoded);
        setIsAuthenticated(true);
    }

    function signOut() {
        localStorage.removeItem("@FC:Ecom:Token:Session");

        setUserData({} as UserData);
        setIsAuthenticated(false);
    }

    useEffect(() => {
        verifyAccessToken();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                userData,
                isAuthenticated,
                onAuthenticateUser,
                onAuthenticateUserFromGoogle,
                signOut,
                keepUserloggedIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return authContext;
};
