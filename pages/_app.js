import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import "@/styles/tabs.css";
import "@/styles/gallery.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
