import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import React from "react";

/*Auth Layout component is using useSession to check if the user is authenticated 
if the user is authenticated the user will be redirected to the frontpage 
if not the user will be redirected to the login 
this will only happen if a page is protected
 */
const Auth = ({ children }: any) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const hasUser = !!session?.user;
  const router = useRouter();
  useEffect(() => {
    if (!loading && !hasUser) {
      router.push("/");
    }
  }, [loading, hasUser]);
  if (loading || !hasUser) {
    return <div>Waiting for session...</div>;
  }
  return <div className="content">{children}</div>;
};

export default Auth;
