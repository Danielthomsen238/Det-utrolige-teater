import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/themes/MainThemes";
import { GlobalStyles } from "../src/styles/Global";
import Auth from "../components/auth";
import "../src/styles/GlobalStyles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Header from "../components/Header";

const pageArray = ["/", "/shows"];

const App = ({ Component, pageProps }: any) => {
  const router = useRouter();

  const showHeader = useMemo(() => {
    return pageArray?.find((item: string) => item === router.asPath);
  }, [router.asPath]);

  console.log(showHeader);

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <GlobalStyles rows={showHeader ? "auto auto minmax(100vh, auto) auto" : "auto minmax(100vh, auto) auto"} />
          <Navbar />
          {Component.auth ? (
            <Auth>
              {showHeader && <Header />}
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
