import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/themes/MainThemes";
import { GlobalStyles } from "../src/styles/Global";
import Auth from "../components/auth";
import "../src/styles/GlobalStyles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }: any) => {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Navbar />
          {Component.auth ? (
            <Auth>
              <Component {...pageProps} />
            </Auth>
          ) : (
            <Component {...pageProps} />
          )}
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};
export default App;
