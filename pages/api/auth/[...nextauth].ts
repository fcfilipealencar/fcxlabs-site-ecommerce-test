/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    scope: "https://www.googleapis.com/auth/contacts https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/directory.readonly https://www.googleapis.com/auth/user.addresses.read https://www.googleapis.com/auth/user.birthday.read https://www.googleapis.com/auth/user.emails.read https://www.googleapis.com/auth/user.gender.read https://www.googleapis.com/auth/user.organization.read https://www.googleapis.com/auth/user.phonenumbers.read https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
                },
            },
        }),
        AppleProvider({
            clientId: process.env.APPLE_CLIENT_ID!,
            clientSecret: process.env.APPLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.SECRET,
    callbacks: {
        // async signIn({ user, account, profile, email, credentials }) {
        //     return true;
        // },
        async jwt({ token, account, user, profile }) {
            if (account) {
                token.accessToken = account.access_token;
                token.id_token = account.id_token;
                token.account = account;
                token.provider = account.provider;
                token.settingApple = AppleProvider({
                    clientId: process.env.APPLE_CLIENT_ID!,
                    clientSecret: process.env.APPLE_CLIENT_SECRET!,
                });
                token.settingGoogle = GoogleProvider({
                    clientId: process.env.GOOGLE_ID,
                    clientSecret: process.env.GOOGLE_SECRET,
                });
                user && (token.user = user);
            }
            return token;
        },
        async session({ session, token, user }) {
            session.token = token;
            return session;
        },
    },
});
