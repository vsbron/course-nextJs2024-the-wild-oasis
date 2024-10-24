import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { createGuest, getGuest } from "@/app/_lib/data-service";

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
    // Function that runs before user actually log in (kinda like middleware)
    async signIn({ user, account, profile }) {
      try {
        // Getting the guest data from Database
        const existingGuest = await getGuest(user.email);
        // If no data found - create a new one
        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });
        // Return true if there's no errors in the process
        return true;
      } catch {
        // Return false if error
        return false;
      }
    },
    // Assigning guest ID to the session. Runs after sign in callback
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
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
