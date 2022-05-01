import type { AppProps } from "next/app";
import "@/styles/base.scss";
import "@/styles/reset.scss";
import Head from "next/head";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>contact app</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
