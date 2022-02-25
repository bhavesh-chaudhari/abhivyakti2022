import AppLayout from "../layouts/AppLayout"
import "../styles/globals.scss";
import "../styles/slider.scss"

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
