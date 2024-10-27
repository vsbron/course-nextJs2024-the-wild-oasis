// next-auth.d.ts
import NextAuth from "next-auth";

// Extend the default User type
declare module "next-auth" {
  interface User {
    guestId: string;
  }

  interface Session {
    user: User;
  }
}
