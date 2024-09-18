import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import "@/styles/tabs.css";
import "@/styles/gallery.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
   <> <Head> <meta name="viewport" content="viewport-fit=cover" /></Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}
