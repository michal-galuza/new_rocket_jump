import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.scss";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: false,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
