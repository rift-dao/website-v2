import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import theme from "theme/theme";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
