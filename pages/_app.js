import "@/styles/globals.css";

import { NextUIProvider } from "@nextui-org/react";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#16a34a" />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
}
