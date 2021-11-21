import Head from "next/head";
import "../public/css/main.min.css";
import "../styles/landing-page.css";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { store, persistor } from "stores/store";
import { PersistGate } from "redux-persist/integration/react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></Script>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin
            />
            {/* <link href="" rel="stylesheet" /> */}
            <style data-href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;700;800;900&display=swap">
              {/* @font-face{font-family:'Inter';font-style:normal} */}
            </style>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
