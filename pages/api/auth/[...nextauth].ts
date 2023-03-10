import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { JWT } from "next-auth/jwt";

interface Credentials {
  username: string;
  password: string;
}

interface Payload {
  iss: string;
  jti: string;
  iat: number;
  nbf: number;
  exp: number;
  uid: number;
}

interface JwtSession {
  jwt: boolean;
  maxAge: number;
}
export default NextAuth({
  //Configure JWT
  session: {
    jwt: true,
    maxAge: 60 * 60,
  } as JwtSession,
  //Specify Provider
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      // @ts-ignore
      async authorize(credentials: Credentials | undefined, req) {
        console.log("hello");
        if (!credentials) return null;
        console.log("credentials", credentials);
        const accessToken = await login(credentials.username, credentials.password);

        if (accessToken) {
          const payload = jwt_decode(accessToken.data.access_token) as Payload;
          console.log("payload", accessToken);
          return {
            token: accessToken.data.access_token,
            userID: payload.uid,
            firstname: accessToken.data.user.firstname,
            lastname: accessToken.data.user.lastname,
          };
        } else {
          console.log("error");
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async redirect({ url, baseUrl }) {
      return url;
    },
    //save the information of the user in the jwt
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
          userID: user.userID,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          token: user.token,
        } as JWT;
      }

      return token;
    },
    session: async ({ session, token }) => {
      console.log("token session", token);

      session.user.token = token.token;
      session.user.userID = token.userID;
      session.user.lastname = token.lastname;
      session.user.firstname = token.firstname;
      session.user.email = token.email;

      return session;
    },
  },
  pages: {
    //signIn: "/login",
    // signOut: '/auth/signout',
    // error: "/login", // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});
//login function
const login = async (username: any, password: any) => {
  console.log("hello");
  const data = {
    username,
    password,
  };
  try {
    const response = axios.post("https://api.mediehuset.net/token", data);
    console.log("response", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
