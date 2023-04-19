import "@app/src/styles/globals.css";

import type { AppProps } from "next/app";
import { Footer, Header } from "@app/src/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
