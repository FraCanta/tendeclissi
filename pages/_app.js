import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import "@/styles/tabs.css";
import "@/styles/gallery.css";
import Head from "next/head";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Funzione per monitorare lo scroll
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerHeight = 400;

    if (scrollPosition > triggerHeight) {
      setShowWhatsApp(true);
    } else {
      setShowWhatsApp(false);
    }
  };

  // Controllo per eseguire la logica solo nel client
  useEffect(() => {
    setIsClient(true);

    if (isClient) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isClient]);

  return (
    <>
      {showWhatsApp && (
        <FloatingWhatsApp
          phoneNumber="+393287512239"
          avatar="/assets/logo.svg"
          accountName="Tendeclissi | Pronto Intervento tenda"
          statusMessage="Ti rispondiamo subito"
          allowClickAway={true}
          placeholder="Scrivi un messaggio"
          chatMessage="Ciao, come possiamo aiutarti?"
          notificationLoop={true}
        />
      )}

      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* --- IUBENDA: deve stare prima di Google --- */}
      <Script
        type="text/javascript"
        src="//embeds.iubenda.com/widgets/c1da79fb-afde-4d1c-96d5-84bd3b7f1c59.js"
      />
      <Script
        src="https://cs.iubenda.com/autoblocking/3927841.js"
        strategy="afterInteractive"
      />
      <Script
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        charSet="UTF-8"
        async
        strategy="afterInteractive"
      />
      <Script id="iubenda-cs-configuration" strategy="afterInteractive">
        {`
          var _iub = _iub || [];
          _iub.csConfiguration = {
            siteId: 3927841,
            cookiePolicyId: 75120188,
            lang: "it",
            storage: { useSiteId: true }
          };
        `}
      </Script>

      {/* --- GOOGLE ANALYTICS: solo dopo Iubenda --- */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-R9FQJCZ50X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R9FQJCZ50X', { 'debug_mode': true });
        `}
      </Script>
    </>
  );
}
