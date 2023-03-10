import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/themes/MainThemes";
import { GlobalStyles } from "../src/styles/Global";
import Auth from "../components/Auth";
import "../src/styles/GlobalStyles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Header from "../components/Header";

//array used for page route
const pageArray = ["/", "/shows"];

const App = ({ Component, pageProps }: any) => {
  //router used for header
  const router = useRouter();
  //useMemo to check if array has router.aspath if true render header
  const showHeader = useMemo(() => {
    return pageArray?.find((item: string) => item === router.asPath);
  }, [router.asPath]);

  return (
    //session provider is for session management
    <>
      <SessionProvider session={pageProps.session}>
        {/*Theme provider used for storing theme styles */}
        <ThemeProvider theme={theme}>
          {/*Global styles is global styles :) and take props if or if not header is rendered */}
          <GlobalStyles rows={showHeader ? "auto auto minmax(100vh, auto) auto" : "auto minmax(100vh, auto) auto"} />
          <Navbar />
          {/*Component.auth is to protect some pages so you have to be logged in or els it will redirect you liek if you try to type /admin in url */}
          {Component.auth ? (
            <Auth>
              {showHeader && <Header />}
              {/*AnimatePresence store animation between pages */}
              <AnimatePresence mode="wait">
                <Component {...pageProps} />
              </AnimatePresence>
            </Auth>
          ) : (
            <>
              {showHeader && <Header />}
              <AnimatePresence mode="wait">
                <Component {...pageProps} />
              </AnimatePresence>
            </>
          )}
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};
export default App;
