import { ThemeProvider, createTheme } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

const theme = createTheme({
  typography: {
    fontFamily: `"Kanit", sans-serif`,
    fontSize: 14,
    fontWeightRegular: 500,
  },
  palette: {
    primary: {
      light: "#FE5454",
      main: "#FE5454",
      dark: "#FE5454",
      contrastText: "#fff",
    },

    secondary: {
      main: "#fff",
      light: "#fff",
      dark: "#fff",
      contrastText: "#7B7878",
    },
    info: {
      main: "#f1f1f1",
      light: "#f1f1f1",
      dark: "#f1f1f1",
      contrastText: "#7B7878",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
