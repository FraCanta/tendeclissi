import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useEffect, useRef } from "react";

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
      <Navbar nr={navbarRef} />
      <main>{props.children}</main>

      <Footer />
    </>
  );
};

export default Layout;
