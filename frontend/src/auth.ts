import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,

  pages: { signIn: "/signup-login" },

  providers: [
    Credentials({
      id: "login",
      name: "login",

      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const response = await fetch(
          `${process.env.BACKEND_URL}/api/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          }
        );

        if (!response.ok) {
          return null;
        }

        const data = await response.json();

        return {
          id: String(data.user.id),
          username: data.user.username,
          accessToken: data.access_token, 
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      // Runs on login
      if (user) {
        token.id = user.id;
        token.username = (user as any).username;
        token.accessToken = (user as any).accessToken;
      }

      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      // Makes token values available in session
      if (session.user) {
        session.user.id = token.id as string;
      }

      session.accessToken = token.accessToken as string;
      session.username = token.username as string;

      return session;
    },
  },
});
