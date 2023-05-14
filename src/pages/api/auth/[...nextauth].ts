import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "@/env/server.mjs";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: `${env.NEXT_PUBLIC_BASE_PATH || ""}/auth/signin`,
  },
  callbacks: {
    session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@kubernetes.io",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(c, req) {
        if (
          c?.email === env.ADMIN_EMAIL &&
          c?.password === env.ADMIN_PASSWORD
        ) {
          return {
            id: "admin",
            email: env.ADMIN_EMAIL,
            image: "https://avatars.githubusercontent.com/u/13383422?v=4",
          };
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
