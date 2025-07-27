import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // Replace with your actual auth logic
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

                if (
                    credentials.username === "jsmith" &&
                    credentials.password === "yourpassword"
                ) {
                    return user;
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
