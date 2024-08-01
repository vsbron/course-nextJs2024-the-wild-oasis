import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Setting up the config file with Google Auth Provider credentials
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // Callbacks for middleware
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
};

// Exporting everything we get from calling NextAuth with the config file
// Destructuring the handlers right away
// We can also get signIn and signOut from NextAuth()
export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
