import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import customTheme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <ColorModeProvider value="light">
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}
