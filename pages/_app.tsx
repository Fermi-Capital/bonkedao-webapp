import "@app/src/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

// import { theme } from "@app/src/styles/mantine-theme";
import localFont from "@next/font/local";
import { ApolloProvider } from "@apollo/client";
import client from "../src/services/apollo";

const myFont = localFont({ src: "../public/TeleSys.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          defaultRadius: "xs",
          colorScheme: "dark",
          headings: {
            fontFamily: myFont.style.fontFamily,
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ApolloProvider>
  );
}
