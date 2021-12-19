import { AppProps } from "next/app";
import Head from "next/head";
import { globalStyles } from "ui";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <link
          rel='preload'
          href='https://use.typekit.net/exh4xyf.css'
          as='style'
        />
        <link rel='stylesheet' href='https://use.typekit.net/exh4xyf.css' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
