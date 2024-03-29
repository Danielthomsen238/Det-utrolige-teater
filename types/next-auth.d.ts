import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      token: string;
      userID: number;
      email: string;
      firstname: string;
      lastname: string;
    };
  }
  interface User {
    token: string;
    userID: number;
    email: string;
    firstname: string;
    lastname: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */

  interface JWT {
    token: string;
    userID: number;
    email: string;
    firstname: string;
    lastname: string;
  }
}
