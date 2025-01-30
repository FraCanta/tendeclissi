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
    const scrollPosition = window.scrollY; // Ottieni la posizione attuale dello scroll
    const triggerHeight = 400; // Altezza dopo la quale mostrare il bottone (puoi cambiare questo valore)

    // Mostra il bottone se la posizione dello scroll è maggiore del triggerHeight
    if (scrollPosition > triggerHeight) {
      setShowWhatsApp(true);
    } else {
      setShowWhatsApp(false);
    }
  };

  // Controllo per eseguire la logica solo nel client
  useEffect(() => {
    setIsClient(true); // Impostiamo a true quando il componente è montato nel client

    if (isClient) {
      window.addEventListener("scroll", handleScroll);

      // Esegui il controllo anche subito dopo che la pagina è stata caricata per determinare se deve essere mostrato
      handleScroll();

      // Rimuovi l'evento scroll quando il componente è smontato
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isClient]);
  return (
    <>
      {" "}
      <Head>
        {" "}
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      {showWhatsApp && (
        <FloatingWhatsApp
          phoneNumber="+393287512239"
          avatar="/assets/logo.svg"
          accountName="Tendeclissi | Pronto Intervento tenda"
          statusMessage="Ti rispondiamo subito"
          notificationSound={true}
          allowClickAway={true}
          placeholder="Scrivi un messaggio"
          chatMessage="Ciao, come possiamo aiutarti?"
          notificationLoop={true}
        />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-R9FQJCZ50X"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R9FQJCZ50X', { 'debug_mode': true });
        `}
      </Script>
      {/* Configurazione Iubenda */}
      <Script id="iubenda-cs-configuration" strategy="afterInteractive">
        {`
          var _iub = _iub || [];
_iub.csConfiguration = {"siteId":3913156,"cookiePolicyId":71604536,"lang":"it","storage":{"useSiteId":true}};
        `}
      </Script>
      <Script
        src="https://cs.iubenda.com/autoblocking/3913156.js"
        strategy="afterInteractive"
      />
      <Script
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        charset="UTF-8"
        async
        strategy="afterInteractive"
      />
    </>
  );
}
