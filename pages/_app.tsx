import AppLayout from "../layouts/AppLayout"
import "../styles/globals.scss";
import "../styles/slider.scss"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      disable: function () {
        return /bot|googlebot|crawler|spider|robot|crawling/i.test(
          navigator.userAgent
        );
      }
    });
  }, []);
  
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
