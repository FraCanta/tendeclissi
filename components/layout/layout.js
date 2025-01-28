import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const navbar = navbarRef.current;
        if (window.pageYOffset > 200) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
      }
    };

    if (typeof window !== "undefined") {
      handleScroll(); // Controlla la posizione dello scroll al montaggio
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []); // Dependency array vuota per eseguire l'effetto solo una volta
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          success: {
            iconTheme: {
              primary: "#5cb4ad",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "red",
              secondary: "white",
            },
          },
        }}
      />
      <Navbar nr={navbarRef} />
      <main>{props.children}</main>

      <Footer />
    </>
  );
};

export default Layout;
